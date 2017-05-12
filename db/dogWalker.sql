-- //dog walker schema template
-- //added place for email and phone #

-- // setup this using sequelize
-- -- use dogWalker;
-- -- create table dogwalker(
-- -- id integer(11)not null auto_increment,
-- -- name varchar(256),
-- -- start integer(11),
-- -- endtime integer(11),
-- -- large boolean,
-- -- medium boolean,
-- -- small boolean,
-- -- email varchar(256),
-- -- phone integer(11),
-- -- primary key(id)
-- -- );


-- select * from dogwalker;


insert into dogWalkers(name, start, endTime, largestDogWillingToWalk, email, PHONE)
 values ("Jim", 12, 14, "s", "fodnb@hotmail.com", 2018675309),
 ("Roger", 08, 22, "m", "roger@hotmail.com", 5157255555),
 ("Lisa", 12, 20, "l", "lisa@hotmail.com", 7175125555),
 ("Curtis", 15, 22, "s", "curtis@gmail.com", 2013111555),
 ("Victoria", 06, 15, "s", "Victoria@msn.com", 7193215222),
 ("Martin", 00, 24, "l", "Martin@dogwalker.com", 5151111111),
 ("Spineshank", 01, 07, "m", "SpineshankisAwesome@pureAwesomeNess.com", 7777777777);