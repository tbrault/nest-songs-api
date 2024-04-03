import {
  ArrayNotEmpty,
  IsArray,
  IsDateString,
  IsMilitaryTime,
  IsNotEmpty,
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
}
