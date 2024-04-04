import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsNotEmpty,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator';

export class CreateSongDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  artists: string[];

  @IsDateString()
  @IsNotEmpty()
  releaseDate: Date;

  @Matches(/^([0-9][0-9]):([0-5][0-9]):([0-5][0-9])$/)
  @IsNotEmpty()
  duration: Date;

  @IsString()
  @IsOptional()
  lyrics: string;
}
