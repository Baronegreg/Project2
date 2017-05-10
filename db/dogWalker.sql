//dog walker schema template
//added place for email and phone #

// setup this using sequelize
-- use dogWalker;
-- create table dogwalker(
-- id integer(11)not null auto_increment,
-- name varchar(256),
-- start integer(11),
-- endtime integer(11),
-- large boolean,
-- medium boolean,
-- small boolean,
-- email varchar(256),
-- phone integer(11),
-- primary key(id)
-- );


select * from dogwalker;


insert into dogwalker(name, start, endTime, large, medium, small, email, PHONE)
 values ("jim", 1200, 1400, false, true, true, "fodnb@hotmail.com", 2018675309),
 ("Roger", 0800, 2200, true, true, true, "roger@hotmail.com", 5157255555),
 ("Lisa", 1200, 2000, fale, false, true, "lisa@hotmail.com", 7175125555),
 ("Curtis", 1500, 2200, true, true, false, "curtis@gmail.com", 2013111555),
 ("Victoria", 0600, 1500, true, true, true, "Victoria@msn.com", 7193215222),
 ("Martin", 0000, 2400, true, false, true, "Martin@dogwalker.com", 5151111111),
 ("Spineshank", 0100, 0700, true, true, true, "SpineshankisAwesome@pureAwesomeNess.com", 7777777777);