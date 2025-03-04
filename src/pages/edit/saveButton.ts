import { IDomEditor } from '@wangeditor/editor';

export class SaveButton {
  // TS 语法
  // class MyButtonMenu {                       // JS 语法
  title;
  tag;
  isSaving;

  constructor() {
    this.title = '保存'; // 自定义菜单标题
    // this.iconSvg = '<svg>...</svg>' // 可选
    this.tag = 'button';
  }

  // 获取菜单执行时的 value ，用不到则返回空 字符串或 false
  getValue(editor: IDomEditor): string | boolean {
    // TS 语法
    // getValue(editor) {                              // JS 语法
    return editor.getHtml();
  }

  // 菜单是否需要激活（如选中加粗文本，“加粗”菜单会激活），用不到则返回 false
  isActive(editor: IDomEditor): boolean {
    // TS 语法
    // isActive(editor) {                    // JS 语法
    return false;
  }

  // 菜单是否需要禁用（如选中 H1 ，“引用”菜单被禁用），用不到则返回 false
  isDisabled(editor: IDomEditor): boolean {
    // TS 语法
    // isDisabled(editor) {                     // JS 语法
    return false;
  }

  // 点击菜单时触发的函数
  exec(editor: IDomEditor, value: string | boolean) {
    // JS 语法
    if (this.isDisabled(editor)) return;
    editor.emit('save');
  }
}
