create database marketplace;

create table category(
     id serial primary key,
     name varchar(300) not null,
     desription text not null
);

create table office(
     id serial primary key,
     name varchar(250) not null,
     category_id int references category(id),
     price varchar(100) not null,
     location text not null,
     address text not null,
     phone varchar(70) not null,
     desription text not null,
     img text not null,
     posting_date date not null DEFAULT CURRENT_DATE
);