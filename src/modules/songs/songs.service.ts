import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';
import { Repository } from 'typeorm';
import { Song } from './entities/song.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song) private songRepository: Repository<Song>,
  ) {}

  async create(createSongDto: CreateSongDto) {
    return await this.songRepository.save(createSongDto);
  }

  async findAll() {
    return await this.songRepository.find();
  }

  async findOne(id: string) {
    return await this.songRepository.findOneBy({ id });
  }

  async update(id: string, updateSongDto: UpdateSongDto) {
    return await this.songRepository.update(id, updateSongDto);
  }

  async remove(id: string) {
    return await this.songRepository.delete(id);
  }
}
