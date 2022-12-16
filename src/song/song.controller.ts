import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';

import { CreateSongDto } from './dto/create-song.dto';
import { Song } from './entities/song.entity';
import { SongService } from './song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Post()
  async create(@Body() createSongDto: CreateSongDto): Promise<Song> {
    return await this.songService.create(createSongDto);
  }

  @Get()
  async findAll(): Promise<Song[]> {
    return await this.songService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Song> {
    return await this.songService.findOne(+id);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.songService.remove(+id);
  }
}
