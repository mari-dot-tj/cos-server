drop table if exists Jacobsen_Svart;

create tabel Jacobsen_Svart (
    user_id int(8) not null auto_increment,
    email varchar(50) not null,
    phone int(8) not null,
    password text,
    secret varchar(32),
    primary key (user_id)
) ENGINE = InnoDB DEFAULT CHARSET=latin1;



