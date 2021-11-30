import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Navigation } from '../../shared/navigations';


@Injectable()
export class NavigationsRepository {

    constructor(@InjectModel('Navigations') private model: Model<Navigation>) {}
    


    async findNavigationById(whitelabelId: string): Promise<Navigation> {
        return this.model.findById(whitelabelId);
    }


    async findNavigationByName(whitelabelName: string): Promise<Navigation> {
        return this.model.findOne({whitelabel: whitelabelName});
    }

}