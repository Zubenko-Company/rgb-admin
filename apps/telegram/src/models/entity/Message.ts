import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  content: string;

  @Column()
  messageIds: string; //{ chatId: number; msgId: number }[];

  @Column()
  sendetAt: Date;
}
