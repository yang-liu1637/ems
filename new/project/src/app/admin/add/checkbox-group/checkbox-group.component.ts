import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CheckboxGroupComponent),
    multi: true
  }]
})
export class CheckboxGroupComponent implements ControlValueAccessor{

  @Input() options: any = []; // checkbox数据数组 包含 id/value/display 三个属性
  @Input() disabled = false; // 控件可用性
  @Input() display: string; // display是展示到界面的名称
  @Input() value: string; // value是提交到后台的数据
  @Input() groupName: string; // checkboxgroup的标题

  model: any = []; // 存放每个checked value 实时变化
  onChange = ([]: any) => {};
  onTouched = () => {};

  constructor() {
  }

  setValue(obj): void{ // 复选框的状态改变时触发
    const { value } = obj; // 解构赋值 这里也可以写value
    const index = this.model.indexOf(value);
    if (index > -1){
      // model中若存在则移除
      this.model.splice(index, 1);
      // onChange方法将值的改变传递给外部 如果不调用这一方法表单控件中得不到任何数据
      // 这个this.model也就是控件使用时与 ngModel 绑定的值
      this.onChange(this.model);
    }else{
      // 不存在则添加
      this.model.push(value);
      this.onChange(this.model);
    }
    console.log(this.model);
  }

  writeValue(value: any): void {
    if (value && value.length){
      this.model = value;
    }else {
      this.model = [];
    }
  }

  registerOnChange(fn: any): void{
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void{
    this.onTouched = fn;
  }
}
