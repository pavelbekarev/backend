import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';


interface IUser {
    name: string
}


@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}


    @Get('getUser/:id')
    async getUser(@Param('id') id: string) {
        return this.userService.getUser(id);
    }

    @Post('createUser')
    async createUser(@Body() data: IUser) {
        return this.userService.createUser(data);
    }
}
