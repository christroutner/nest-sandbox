import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';
import { Cat } from './entities/cat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CatsService {
  constructor(
    @InjectRepository(Cat)
    private catsRepository: Repository<Cat>,
  ) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    console.log('createCatDto: ', createCatDto);
    // return 'This action adds a new cat';

    const cat = this.catsRepository.create(createCatDto);
    return await this.catsRepository.save(cat);
  }

  // async findAll(): Promise<Array<Cat>> {
  async findAll() {
    // return `This action returns all cats`;
    return await this.catsRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} cat`;
  }

  update(id: number, updateCatDto: UpdateCatDto) {
    console.log('updateCatDto: ', updateCatDto);
    return `This action updates a #${id} cat`;
  }

  remove(id: number) {
    return `This action removes a #${id} cat`;
  }
}
