import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
  IsOptional,
  IsString,
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

  @IsMilitaryTime()
  @IsNotEmpty()
  duration: Date;

  @IsString()
  @IsOptional()
  lyrics: string;
}
