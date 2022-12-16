import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('song')
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  artist: string;

  @Column()
  duration: number;

  @Column()
  genre: string;

  @Column()
  album: string;
}
