//dog walker schema template
//added place for email and phone #


use dogWalkers;
create table dogwalker(
id integer(11)not null auto_increment,
name varchar(256),
start integer(11),
endtime integer(11),
large boolean,
medium boolean,
small boolean,
email varchar(256),
phone integer(11),
primary key(id)
);
select * from dogWalker;
insert into dogwalker(name, start, end, large, medium, small)
 values ("john", 1200, 1400, false, true, true);