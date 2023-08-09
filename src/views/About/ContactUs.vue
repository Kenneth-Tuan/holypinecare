<template>
  <div class="page-title-wrapper">
    <p class="page-title-content">聯絡我們</p>
  </div>
  <div class="form-wrapper flex flex-row justify-center items-start">
    <a-form :model="formState" v-bind="layout" layout="vertical" name="nest-messages"
      :validate-messages="validateMessages" @finish="onFinish" class="w-1/3">
      <a-form-item :name="['user', 'name']" label="姓名" :rules="[{ required: true }]">
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item :name="['user', 'email']" label="電子郵件" :rules="[{ type: 'email' }, { required: true }]">
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="內容">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 9 }">
        <a-button type="blue" class="bg-blue-500 rounded-lg h-auto text-white text-lg font-semibold py-2 px-6"
          html-type="submit">
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  <a-modal v-model:visible="open" :footer="null">
    <a-result status="success" title="發送成功!" sub-title="">
      <template #extra>
        <a-button key="buy" @click="onClick()">回首頁</a-button>
      </template>
    </a-result>
  </a-modal>
</template>

<script setup>
import { reactive, ref } from "vue";
import { Modal } from "ant-design-vue";
import mainAPIs from '../../apis/mainAPIs'
import { useRouter } from "vue-router";

const router = useRouter()

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 24 },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const open = ref(false)

const formState = reactive({
  user: {
    name: "",
    email: "",
    introduction: "",
  },
});

const onFinish = async (values) => {
  mainAPIs.submitForm({
    'entry.1991431341': formState.user.name,
    'entry.299389571': formState.user.email,
    'entry.731683544': formState.user.introduction
  },)
  open.value = true
};

function onClick() {
  router.push('/main')
  open.value = false
}


</script>

<style lang="scss" scoped>
.form-wrapper {
  :deep() {
    .ant-form-item-label {
      label {
        @apply text-xl text-blue-400;
      }
    }
  }
}
</style>
