import bcrypt from 'bcrypt';
import { Entity, ObjectId, ObjectIdColumn, Column, UpdateDateColumn, Timestamp, CreateDateColumn, BeforeInsert } from "typeorm"

@Entity()
export class User {
    @ObjectIdColumn()
    id!: ObjectId

    @Column()
    email!: string;

    @Column()
    password!: string;

    @Column()
    mobileNumber!: string;

    @Column()
    status!: boolean

    @Column()
    username!: string

    @CreateDateColumn({
        type: 'timestamp'
    })
    created!: Timestamp;

    @UpdateDateColumn({
        type: 'timestamp'
    })
    modified!: Timestamp;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfPasswordMatch(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

    static async comparePasswords(
        candidatePassword: string,
        hashedPassword: string
    ) {
        return await bcrypt.compare(candidatePassword, hashedPassword);
    }
}