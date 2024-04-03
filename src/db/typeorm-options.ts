import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

export const typeOrmOptions: TypeOrmModuleAsyncOptions = {
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.getOrThrow('DATABASE_HOST'),
    port: +configService.getOrThrow('DATABASE_PORT'),
    username: configService.getOrThrow('DATABASE_USERNAME'),
    password: configService.getOrThrow('DATABASE_PASSWORD'),
    database: configService.getOrThrow('DATABASE_NAME'),
    autoLoadEntities: true,
    synchronize: configService.getOrThrow('DATABASE_SYNCHRONIZE'),
  }),
  inject: [ConfigService],
};
