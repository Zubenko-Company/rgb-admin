import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class Message extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column()
  token: string;

  @Column()
  sendetAt: Date;
}
