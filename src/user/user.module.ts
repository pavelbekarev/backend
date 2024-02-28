import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { PrismaModule } from 'src/prisma/prisma.module';


@Module({
    imports: [UserModule, PrismaModule],
    controllers: [UserController],
    providers: [UserService],
})
export class UserModule {}
