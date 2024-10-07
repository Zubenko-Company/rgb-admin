import {
	Entity,
	Column,
	BaseEntity,
	PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message extends BaseEntity {
	@PrimaryGeneratedColumn()
	id: string;

	@Column()
	content: string;

	// @Column() //TODO
	// messageIds: { chatId: number; msgId: number }[];

	@Column()
	sendetAt: Date;
}
