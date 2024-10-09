<template>
  <q-dialog v-model="isVisible" @hide="onHide">
    <q-card style="min-width: 350px">
      <q-card-section>
        <div class="text-h6">{{ title }}</div>
      </q-card-section>

      <q-card-section>
        <q-form class="q-gutter-md">
          <q-input filled v-model="user.name" label="Your name *" hint="Name and surname" lazy-rules
            :rules="[val => val && val.length > 0 || 'Please type something']" />

          <q-input filled type="number" v-model="user.age" label="Your age *" lazy-rules :rules="[
            val => val !== null && val !== '' || 'Please type your age',
            val => val > 0 && val < 100 || 'Please type a real age'
          ]" />
        </q-form>
      </q-card-section>
      <q-card-actions align="right">
        <slot name="actions">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Reserve" color="primary" @click="onConfirm" />
        </slot>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { ref, watch } from 'vue'

export default {
  name: 'ReusableModalComponent',
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      required: true
    },
    confirmLabel: {
      type: String,
      default: 'Confirm'
    },
    onConfirmAction: {
      type: Function,
      default: () => { }
    }
  },
  emits: ['update:modelValue', 'confirm'],
  setup(props, { emit }) {
    const isVisible = ref(props.modelValue)
    const user = ref({
      name: '',
      age: null
    })
    
    watch(() => props.modelValue, (newValue) => {
      isVisible.value = newValue
    })

    watch(isVisible, (newValue) => {
      emit('update:modelValue', newValue)
    })

    const onConfirm = () => {
      console.log('User:', user.value)
      props.onConfirmAction(user.value)
      emit('confirm')
      isVisible.value = false
    }

    const onHide = () => {
      emit('update:modelValue', false)
    }

    return {
      isVisible,
      onConfirm,
      user,
      onHide
    }
  }
}
</script>