# 上传单张图片

## 参数 `Attributes`
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|
action|上传接口|String|-|/api/storage/image_file_models/
fileSize|上传图片的大小限制，单位为MB|Number|-|10
imageUrl|展示图片的url|String|-|
height|组件高度|String|-|178px
width|组件宽度|String|-|178px
uploadName|上传的字段名|String|-|uri

## 事件 `Events`
事件名称|说明|回调参数
---|---|---|
on-success|上传成功|response
## 样例
```Vue
<template>
    <wch-upload-single-image 
        :image-url="url"
        @on-success="onSuccess"
     />
</template>

<script>
export default {
    data() {
        return {
            url: ''       
        }
    },
    methods: {
        onSuccess(res) {
            this.url = res.uri
        }
    }
}
</script>
```