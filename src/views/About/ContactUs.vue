<template>
  <div class="page-title-wrapper">
    <p class="page-title-content">聯絡我們</p>
  </div>
  <div class="form-wrapper flex flex-row justify-center items-start">
    <a-form
      :model="formState"
      v-bind="layout"
      layout="vertical"
      name="nest-messages"
      :validate-messages="validateMessages"
      @finish="onFinish"
      class="w-1/3"
    >
      <a-form-item
        :name="['user', 'name']"
        label="姓名"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.user.name" />
      </a-form-item>
      <a-form-item
        :name="['user', 'email']"
        label="電子郵件"
        :rules="[{ type: 'email' }, { required: true }]"
      >
        <a-input v-model:value="formState.user.email" />
      </a-form-item>
      <a-form-item :name="['user', 'introduction']" label="內容">
        <a-textarea v-model:value="formState.user.introduction" />
      </a-form-item>
      <a-form-item :wrapper-col="{ ...layout.wrapperCol, offset: 9 }">
        <a-button
          type="blue"
          class="bg-blue-500 rounded-lg h-auto text-white text-lg font-semibold py-2 px-6"
          html-type="submit"
        >
          Submit
        </a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup>
import { reactive } from "vue";

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

const formState = reactive({
  user: {
    name: "",
    email: "",
    introduction: "",
  },
});
const onFinish = (values) => {
  console.log("Success:", values);
};
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
