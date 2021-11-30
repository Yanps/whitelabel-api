import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Whitelabel } from 'src/shared/whitelabel';


@Injectable()
export class WhitelabelsRepository {

    constructor(@InjectModel('Whitelabel') private model: Model<Whitelabel>) {}
    

    async findAll(): Promise<Whitelabel[]> {
        return this.model.find();
    }


    async findWhitelabelById(whitelabelId: string): Promise<Whitelabel> {
        return this.model.findById(whitelabelId);
    }


    async findWhitelabelByName(whitelabelName: string): Promise<Whitelabel> {
        return this.model.findOne({name: whitelabelName});
    }

}