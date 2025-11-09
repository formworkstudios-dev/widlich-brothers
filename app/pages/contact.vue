<script
  setup
  lang="ts"
>
import { reactive, ref } from 'vue'
import type { FormError, FormErrorEvent, FormSubmitEvent } from '@nuxt/ui'

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const formRef = ref()
const submitting = ref(false)
const success = ref(false)
const serverError = ref<string | null>(null)

const validate = (state: typeof form): FormError[] => {
  const errors: FormError[] = []
  if (!state.name || state.name.trim().length < 2) {
    errors.push({ name: 'name', message: 'Please provide your name.' })
  }
  const emailRe = /[^\s@]+@[^\s@]+\.[^\s@]+/
  if (!state.email || !emailRe.test(state.email)) {
    errors.push({ name: 'email', message: 'Please provide a valid email.' })
  }
  if (!state.message || state.message.trim().length < 10) {
    errors.push({ name: 'message', message: 'Please include a short message (10+ characters).' })
  }
  return errors
}

async function onSubmit(event: FormSubmitEvent<typeof form>) {
  submitting.value = true
  serverError.value = null
  success.value = false
  try {
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: { ...event.data },
    })
    if (error.value) {
      const err = error.value as { message?: string } | null
      serverError.value = err?.message || 'Something went wrong. Please try again.'
      return
    }
    success.value = true
    Object.assign(form, { name: '', email: '', phone: '', message: '' })
  } finally {
    submitting.value = false
  }
}

function onError(e: FormErrorEvent) {
  if (e?.errors?.[0]?.id) {
    const el = document.getElementById(e.errors[0].id)
    el?.focus()
    el?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
}
</script>

<template>
  <div class="relative w-full min-h-screen flex flex-col">
    <div class="relative w-full h-72 md:h-96 flex items-center justify-center mb-8 overflow-hidden">
      <NuxtImg
        src="/tree-trunk-hero-weidlich-brothers.webp"
        alt="Weidlich Brothers Tree Care Hero"
        class="absolute inset-0 w-full h-full object-cover z-0"
      />
      <div class="absolute inset-0 z-10 bg-black/40" />
      <div
        class="relative z-10 flex flex-col items-center justify-center w-full h-full"
        style="padding-top:4.5rem;"
      >
        <h1 class="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg text-center">Contact Weidlich Brothers
          Tree Care</h1>
      </div>
    </div>
    <UContainer class="pt-8 pb-16 max-w-3xl flex-1 flex justify-center ">
      <div class="w-full max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold mb-4">Get In Touch</h2>
        <p class="text-lg mb-4">
          For questions, quotes, or to schedule service, call us at <a
            href="tel:+15707033963"
            class="text-amber-700 underline"
          >1-570-7033963</a> or email <a
            href="mailto:info@weidlichbrotherstreecare.com"
            class="text-amber-700 underline"
          >info@weidlichbrotherstreecare.com</a>.
        </p>
        <UCard
          class="mt-8 rounded-none bg-amber-100/30"
          variant="outline"
        >
          <div class="space-y-4">
            <UAlert
              v-if="success"
              class="rounded-none pb-2 mb-4"
              color="success"
              variant="soft"
              title="Thanks!"
              description="We’ve received your message and will be in touch shortly."
            />
            <UAlert
              v-if="serverError"
              class="rounded-none pb-2 mb-4"
              color="error"
              variant="soft"
              title="There was a problem"
              :description="serverError"
            />
          </div>
          <UForm
            ref="formRef"
            :state="form"
            :validate="validate"
            class="space-y-6"
            @submit="onSubmit"
            @error="onError"
          >
            <UFormField
              label="Name"
              name="name"
              class="w-full"
            >
              <UInput
                v-model="form.name"
                placeholder="Your full name"
                class="w-full rounded-none"
              />
            </UFormField>
            <UFormField
              label="Email"
              name="email"
              class="w-full"
            >
              <UInput
                v-model="form.email"
                type="email"
                placeholder="you@example.com"
                class="w-full rounded-none"
              />
            </UFormField>
            <UFormField
              label="Phone"
              name="phone"
              class="w-full"
            >
              <UInput
                v-model="form.phone"
                type="tel"
                placeholder="(555) 555-5555"
                class="w-full rounded-none"
              />
            </UFormField>
            <UFormField
              label="Message"
              name="message"
              class="w-full"
            >
              <UTextarea
                v-model="form.message"
                :rows="6"
                placeholder="How can we help you?"
                class="w-full rounded-none"
              />
            </UFormField>
            <div class="flex items-center gap-4">
              <UButton
                :loading="submitting"
                :disabled="submitting"
                type="submit"
                color="primary"
                size="lg"
                variant="solid"
                class="rounded-none w-full md:w-auto justify-center text-center"
              >
                <template
                  #leading
                  v-if="submitting"
                >
                  <UIcon
                    name="i-mdi-loading"
                    class="animate-spin mr-2"
                    size="20"
                  />
                </template>
                Send Message
              </UButton>
            </div>
          </UForm>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<style scoped>
.bg-black\/40 {
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
