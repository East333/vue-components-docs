# 弹窗表单
## 参数 `Props`
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|
getRowData|对行数据进行处理的函数|Function|-|`(row, key_CN) => row[key_CN]`
templateApiPrefix|下载模板接口的前缀|String|-|/storage/template/
templateName|下载模板的文件名|String|-|
rowSetting|导入行的配置|Array|-|
fileSize|文件大小（单位为MB）|Number|-|5
showDownload|展示下载模板按钮|Boolean|-|true
showIndex|展示序号|Boolean|-|true
## 事件 `Events`
事件名称|说明|回调参数
---|---|---|
handle-success|导入成功|dataList, function(postFunc, list, cb, message = '导入成功')
## 插槽 `Slots`

## 样例
```Vue
<template>
    <wch-excel-import-auto
      :row-setting="rowSetting"
      :get-row-data="getRowData"
      template-name="导入模板.xlsx"
      @handle-success="handleSuccess"
    />
</template>

<script>
export default {
    data() {
        return {
            rowSetting: [

            ]      
        }
    },
    methods: {
    }
}
</script>
```