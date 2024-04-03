import { Module } from '@nestjs/common';
import { SongsModule } from './modules/songs/songs.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { configOptions } from '../config/config-options';
import { typeOrmOptions } from './db/typeorm-options';

@Module({
  imports: [
    SongsModule,
    ConfigModule.forRoot(configOptions),
    TypeOrmModule.forRootAsync(typeOrmOptions),
  ],
})
export class AppModule {}
