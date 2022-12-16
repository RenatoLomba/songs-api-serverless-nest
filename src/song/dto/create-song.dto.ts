import { IsNumber, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString()
  name: string;

  @IsString()
  artist: string;

  @IsNumber()
  duration: number;

  @IsString()
  genre: string;

  @IsString()
  album: string;
}
