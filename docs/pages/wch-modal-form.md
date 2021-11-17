# 弹窗表单
## 参数
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|
modalTitle|弹窗标题|String|-|新增数据、更新数据
modalVisible.sync|弹窗打开关闭状态|Boolean|-|false
modalWidth|弹窗宽度|String|-|500px
modalTop|弹窗距离页面顶部距离|String|-|10vh
modalCloseOnClickModal|是否可以通过点击modal关闭Dialog|Boolean|-|true
<a href="#config数据格式">config</a> |表单配置项|Array|见下文|[]
elRowGutter|表单项之间的距离|Number|-|10
elColSpan|表单项占一行的多少，满行为24|Number|1~24|24
formRules|表单验证规则|Object|-|{}
formLabelWidth|表单label的宽度|String|-|-
formLoadingText|表单loading的文字|String|-|正在加载数据...
updateForm|表单更新时的更新内容,null为创建模式，非null为更新模式|Object、null|-|null
### config数据格式
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|
title|自定义字段名称|String|-|非必传
field|自定义字段键值|String|-|非必传
<a href="#cuForm数据格式">cuForm</a>|创建更新配置|Object|见下文|-
#### cuForm数据格式
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|
title|自定义字段名称|String|-|非必传
field|自定义字段键值|String|-|非必传
default|默认值|-|-|空字符串
required|是否必填|Boolean|-|false
type|表单的的类型|String|select|必传
dict|type为select时有效，选择框使用dict生成选项|Object|-|非必传
width|form-item的宽度|String|-|100%
updateDisabled|更新时禁用|Boolean|-|-
createDisabled|创建时禁用|Boolean|-|-
clearable|是否可清除|Boolean|-|true
extraBind|额外参数|Object|-|-
itemBind|elFormItem的额外参数|Object|-|-
optionsProps|type为select时有效，options的自定义配置|Object|-|{value: 'value',label: 'label'}
format|时间选择器的显示格式化|String|-|yyyy-MM-dd, yyyy-MM-dd HH:mm:ss, yyyy, yyyy-MM
valueFormat|时间选择器的数据格式化|String|-|yyyy-MM-dd, yyyy-MM-dd HH:mm:ss, yyyy, yyyy-MM-dd
elColSpan|item占本行多少|Number|-|24

## 使用样例
```Vue
<template>
    <modal-form
      :update-form="updateForm"
      :modal-visible.sync="visible"
      :config="config"
      @on-submit="onSubmit"
    />
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            config: [
                { title: '名称', field: 'name', cuForm: { required: true }},
                { title: '描述', field: 'description', cuForm: {}}
            ],
            updateForm: null         
        }
    },
    methods: {
        onSubmit(pF, cb) {
            if (this.updateForm) { // 更新

            } else { // 创建

            }
        }
    }
}
</script>
```