import Vue from 'vue'
import { 
    Button,
    Form ,
    FormItem,
    Input,
    Message ,
    MessageBox,
    Container,
    Header,
    Aside,
    Main,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Breadcrumb,
    BreadcrumbItem,
    Card,
    Col,
    Row,
    Table,
    TableColumn,
    Switch,
    Tooltip,
    Pagination,
    Dialog,
    Scrollbar,
    Tag,
    Tree,
    Select,
    Option,
    Cascader,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Upload,
    Link,


} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Card)
Vue.use(Row)
Vue.use(Col)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Switch)
Vue.use(Tooltip)
Vue.use(Pagination)
Vue.use(Dialog)
Vue.use(Scrollbar)
Vue.use(Tag)
Vue.use(Tree)
Vue.use(Select)
Vue.use(Option)
Vue.use(Cascader)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Upload)
Vue.use(Link)
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()
// Vue.use()

//弹框提示组件需要挂在到vue的原型对象中
Vue.prototype.$message = Message
Vue.prototype.$msgbox = MessageBox
