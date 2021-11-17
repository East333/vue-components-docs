# 弹窗表单
## 参数 `Props`
参数|说明|数据格式|可选值|默认值
---|---|---|---|---|

## 事件 `Events`
事件名称|说明|回调参数
---|---|---|

## 插槽 `Slots`

## 样例
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
                this.visible = false
            } else { // 创建
                this.visible = false
            }
        }
    }
}
</script>
```