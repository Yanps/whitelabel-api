import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { WhitelabelsController } from "./controllers/whitelabels.controller";
import { WhitelabelsSchema } from './schemas/whitelabels.schema';
import { WhitelabelsRepository } from './repositories/whitelabels.repositories';
import { ComponentsSchema } from './schemas/components.schema';
import { NavigationsSchema } from './schemas/navigation.schemas';
import { ComponentsController } from './controllers/components.controller';
import { ComponentsRepository } from "./repositories/components.repositories";
import { NavigationsController } from "./controllers/navigations.controller";
import { NavigationsRepository } from './repositories/navigations.repositories';


@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Whitelabel', schema: WhitelabelsSchema },
            { name: 'Components', schema: ComponentsSchema },
            { name: 'Navigations', schema: NavigationsSchema }
        ])
    ],
    controllers: [
        WhitelabelsController,
        ComponentsController,
        NavigationsController
    ],
    providers: [
        WhitelabelsRepository,
        ComponentsRepository,
        NavigationsRepository
    ]
})
export class WhitelabelsModule {}