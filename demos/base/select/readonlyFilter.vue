<template>
    <m-select v-model="value" :options="['Abc', 'Adf', '子鼠寅卯', '甲乙丙丁']" :input-readonly="false" 
    :filter="customFilter" />
</template>
  
<script setup lang="ts">
import { ref } from "vue";
const value = ref('Abc');
type CustomFilter = (option: string, inputValue: string) => boolean
const customFilter: CustomFilter = (option, inputValue) => {
    console.log(option,inputValue)
    return option.toLowerCase().includes(inputValue.toLowerCase());
}


</script>
  