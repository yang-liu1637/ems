import { Injectable } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable()
export class Common {
    constructor(private sanitizer: DomSanitizer){}

    nullorUndefinedorEmpty(str: any): boolean {
        if (!isNullOrUndefined(str) && str !== '') {
            return false;
        }
        return true;
    }

    /*
     * 首字母大小写
     * @param {*} ss 当前变量
     * @param {*} t 转换类型 dx 首字母大写 else 首字母小写
     */
    dxxx(ss, t): string{
        if (t === 'dx') {
            ss = ss.slice(0, 1).toUpperCase() + ss.slice(1);
        } else {
            ss = ss.slice(0, 1).toLowerCase() + ss.slice(1);
        }
        return ss;
    }

    /*
     * 时间format
     * @param {*} fmt 时间格式 YYYY-mm-dd HH:MM
     * @param {*} date 时间
     */
    dateFormat(fmt, date): string {
        let ret;
        const opt = {
            'Y+': date.getFullYear().toString(),        // 年
            'm+': (date.getMonth() + 1).toString(),     // 月
            'd+': date.getDate().toString(),            // 日
            'H+': date.getHours().toString(),           // 时
            'M+': date.getMinutes().toString(),         // 分
            'S+': date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
      // tslint:disable-next-line:forin
        for (const k in opt) {
            ret = new RegExp('(' + k + ')').exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length === 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, '0')));
            }
        }
        return fmt;
    }

    /*
     * 获取不重复的数字
     * @param s
     * @param v
     */
    setNumber(type: number, v: number[]): number {
        const n: number = this.getNumberFormat(type);
        if (isNullOrUndefined(v) || v.length === 0){
            return n;
        } else {
            return this.arrRunCopy(v, type);
        }
    }

    /*
     * 获取随机数
     * @param type
     */
    getNumberFormat(type: number): number {
        let n: number = null;
        switch (type){
            case 1:
                 // 1 - 10
                n = Math.floor(Math.random() * 10);
                if (n === 0){
                    n = 1;
                }
                break;
        }
        return n;
    }

    arrRunCopy(v: number[], type: number): number {
        let i = 0;
        let result: number = null;
        while (i < 1){
            const n: number = this.getNumberFormat(type);
            if (v.indexOf(n) === -1) {
                result = n;
                i = 1;
            }
        }
        return result;
    }

    setUrl(url: string): any {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
