import { Body, Injectable, Post } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';





@Injectable()
export class UserService {
    constructor (private readonly prismaService: PrismaService) {}

    
    async getUser(id: string) {
        const data = await this.prismaService.user.findUnique({
            where: {
                id: id
            }
        });
        return data;
    }


    async createUser(data) {
        const response = await this.prismaService.user.create({data});
        return response;
    }
    


}
