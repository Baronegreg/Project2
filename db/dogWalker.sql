//dog walker schema template


use dogWalkers;
create table dogwalker(
id integer(11)not null auto_increment,
name varchar(256),
start integer(11),
end integer(11),
large boolean,
medium boolean,
small boolean,
primary key(id)
);
select * from dogWalker;
insert into dogwalker(name, start, end, large, medium, small)
 values ("john", 1200, 1400, false, true, true);