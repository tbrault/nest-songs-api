import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song.dto';
import { UpdateSongDto } from './dto/update-song.dto';

@Injectable()
export class SongsService {
  create(createSongDto: CreateSongDto) {
    return createSongDto;
  }

  findAll() {
    return `This action returns all songs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} song`;
  }

  update(id: number, updateSongDto: UpdateSongDto) {
    return updateSongDto;
  }

  remove(id: number) {
    return `This action removes a #${id} song`;
  }
}
