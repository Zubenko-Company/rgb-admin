import { BaseEntity, Column, Entity, ObjectId, ObjectIdColumn } from "typeorm";

@Entity()
export class User extends BaseEntity {
  @ObjectIdColumn()
  id: ObjectId;

  @Column({ unique: true })
  chatId: number;

  @Column()
  isBot: boolean;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  userName: string;

  @Column()
  isPremium: boolean;

  @Column()
  isAgreed: boolean;

  @Column()
  isBlocked: boolean;

  @Column("text")
  currentMenu: string;

  @Column("text", { nullable: true, default: null })
  currentModel: string | null;

  @Column()
  public created_at: Date;

  @Column({ default: 0 })
  feedBackStep: number;
}
