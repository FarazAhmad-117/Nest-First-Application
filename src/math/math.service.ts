/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class MathService {

    getSum(a: number, b:number): number {
        return a+b;
    }
}
