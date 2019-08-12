export const state = () => ({
  leftMenuList: [
    {
      url: "",//1级：url与child对立，如有值，则child为null，name不为空；若为空，则name为空，child有值
      name: "默认样式",
      group: [
        {
          url: "",//2级
          name: "Basic",
          child: [
            {url: "/default/base/layout", name: "Layout布局", group: [], child: []},//2级
            {url: "/default/base/container", name: "Container 布局容器", group: [], child: []},
            {url: "/default/base/color", name: "Color 色彩", group: [], child: []},
            {url: "/default/base/typography", name: "Typography 字体", group: [], child: []},
            {url: "/default/base/border", name: "Border 边框", group: [], child: []},
            {url: "/default/base/icon", name: "Icon 图标", group: [], child: []},
            {url: "/default/base/button", name: "Button 按钮", group: [], child: []},
            {url: "/default/base/link", name: "Link 文字链接", group: [], child: []}
          ],
          group: []
        },
        {
          url: "",//2级
          name: "Form",
          child: [
            {url: "/default/form/radio", name: "Radio 单选框", group: [], child: []},//2级
            {url: "/default/form/checkbox", name: "Checkbox 多选框", group: [], child: []},
            {url: "/default/form/input", name: "Input 输入框", group: [], child: []},
            {url: "/default/form/input-number", name: "InputNumber 计数器", group: [], child: []},
            {url: "/default/form/select", name: "Select 选择器", group: [], child: []},
            {url: "/default/form/cascader", name: "Cascader 级联选择器", group: [], child: []},
            {url: "/default/form/switch", name: "Switch 开关", group: [], child: []},
            {url: "/default/form/slider", name: "Slider 滑块", group: [], child: []},
            {url: "/default/form/time-picker", name: "TimePicker 时间选择器", group: [], child: []},
            {url: "/default/form/date-picker", name: "DatePicker 日期选择器", group: [], child: []},
            {url: "/default/form/date-time-picker", name: "DateTimePicker 日期时间选择器", group: [], child: []},
            {url: "/default/form/upload", name: "Upload 上传", group: [], child: []},
            {url: "/default/form/rate", name: "Rate 评分", group: [], child: []},
            {url: "/default/form/color-picker", name: "ColorPicker 颜色选择器", group: [], child: []},
            {url: "/default/form/transfer", name: "Transfer 穿梭框", group: [], child: []},
            {url: "/default/form/form", name: "Form 表单", group: [], child: []},
          ],
          group: []
        },
        {
          url: "",//2级
          name: "data",
          child: [
            {url: "/default/data/table", name: "table 表格", group: [], child: []},//2级
          ],
          group: []
        },
        {
          url: "",//2级
          name: "others",
          child: [
            {url: "/default/others/infiniteScroll", name: "InfiniteScroll 无限滚动", group: [], child: []},//2级
          ],
          group: []
        }
      ],
      child: []
    },
    {
      url: "",//1级：url与child对立，如有值，则child为null，name不为空；若为空，则name为空，child有值
      name: "自测",
      group: [
        {
          url: "",//2级
          name: "calendar",
          child: [
            {url: "/test/calendar/calendar", name: "calendar", group: [], child: []},//2级
          ],
          group: []
        }
      ],
      child: []
    }
  ]
})
