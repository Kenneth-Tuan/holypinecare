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
</template>

<script setup>
import { reactive } from "vue";
import axios from 'axios'
import mainAPIs from '../../apis/mainAPIs'
import $ from "jquery";

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

const url = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdZwPuGZsOjlgxoMJWtWBWpsShwaMbQsMPlaMiOyInDudGt3Q/formResponse'

const onFinish = async (values) => {
  $.ajax({
    url,
    crossDomain: true,//解決跨網域CORS的問題
    data: {// entry.xxxxx 這些需要填寫您表單裡面的值，與其相互對應
      'entry.1991431341': formState.user.name,
      'entry.299389571': formState.user.email,
      'entry.731683544': formState.user.introduction
    },
    type: "POST", //因為是要進行insert的動作，故事用POST
    dataType: "JSONP",
    complete: function () {
      console.log('success')
    }
  });
  // await mainAPIs.submitForm({
  //   'entry.1991431341': formState.user.name,
  //   'entry.299389571': formState.user.email,
  //   'entry.731683544': formState.user.introduction
  // },)
};


const instance = axios.create({
  timeout: 1000,
  async: true,
  crossDomain: true,
});

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
