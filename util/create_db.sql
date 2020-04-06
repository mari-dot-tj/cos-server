drop table if exists Customer_coffee;
drop table if exists Coffee_type;
drop table if exists Bag_customer;
drop table if exists Order_coffee;
drop table if exists Fixed_order;
drop table if exists Orders;
drop table if exists Coffee;
drop table if exists Customer;
drop table if exists Jacobsen_Svart;
drop table if exists Constants;
drop table if exists Prod_day;
drop table if exists Delivery_day;
drop table if exists Delivery;
drop table if exists Place;
drop table if exists Reference;
drop table if exists Category;
drop table if exists Order_status;
drop table if exists Type;
drop table if exists Bag;
drop table if exists Ground_level;

create table Jacobsen_Svart (
    user_id int(8) not null auto_increment,
    email varchar(100) not null,
    superuser tinyint(1) not null default 0,
    phone int(8) not null,
    password text,
    secret varchar(32),
    primary key (user_id)
) ENGINE = InnoDB DEFAULT CHARSET=latin1;

create table Constants (
    weight_loss double,
    avg_batches_pr_hour int(4),
    grinding_fee smallint,
    order_before_prod_day date not null
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Mail_price (
    mail_price_id smallint not null auto_increment,
    name varchar(30),
    price int(4),
    primary key (mail_price_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


create table Ground_level (
    ground_level_id int(4) not null auto_increment,
    level_name varchar(50) not null,
    grinding_fee smallint not null,
    primary key (ground_level_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Prod_day (
    prod_day_id int not null auto_increment,
    day_of_week varchar(30) not null,
    primary key (prod_day_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Delivery_day (
    del_day_id int not null auto_increment,
    day_of_week timestamp not null,
    primary key (del_day_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Delivery (
    delivery_id int not null auto_increment,
    delivery_option varchar(100) not null,
    price smallint,
    primary key (delivery_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Place (
    zip_code smallint not null,
    province varchar(100) not null,
    primary key (zip_code)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Reference (
    ref_id int not null auto_increment,
    name varchar(50) not null,
    phone int(8) not null,
    primary key (ref_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Category (
    category_id int not null auto_increment,
    name varchar(50) not null,
    description text,
    primary key (category_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Order_status (
    status_id int not null auto_increment,
    status_name varchar(50) not null,
    primary key (status_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Type (
    type_id int not null auto_increment,
    name varchar(100) not null,
    batch_size tinyint not null,
    primary key (type_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Bag (
    bag_id int not null auto_increment,
    size varchar(40) not null,
    grams int(5) not null,
    primary key (bag_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Customer (
    customer_id int not null auto_increment,
    name varchar(200) not null,
    address varchar(100) not null,
    phone int(8) not null,
    org_number int not null unique,
    email varchar(100) not null unique,
    active boolean default 0,
    password text,
    subscription boolean,
    zip_code smallint not null,
    ref_id int,
    primary key (customer_id),
    foreign key (zip_code) references Place(zip_code),
    foreign key (ref_id) references Reference(ref_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


create table Coffee (
    coffee_id int not null auto_increment,
    name varchar(100) not null,
    description varchar(500) not null,
    category_id int not null,
    primary key (coffee_id),
    foreign key (category_id) references Category(category_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Orders (
    order_id int not null auto_increment,
    order_date timestamp not null default current_timestamp on update current_timestamp,
    info varchar(200),
    delivery_date date not null,
    production_date date default null,
    customer_id int not null,
    status_id int not null,
    delivery_id int not null,
    ref_id int not null,
    primary key (order_id),
    foreign key (customer_id) references Customer(customer_id),
    foreign key (status_id) references Order_status(status_id),
    foreign key (delivery_id) references Delivery(delivery_id),
    foreign key (ref_id) references Reference(ref_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Fixed_order (
    fixed_order_id int not null auto_increment,
    order_interval tinyint not null,
    day_of_week varchar(20) not null,
    order_id int not null,
    primary key (fixed_order_id),
    foreign key (order_id) references Orders(order_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Customer_coffee (
    customer_coffee_id int not null auto_increment,
    coffee_id int not null,
    customer_id int not null,
    price int(5) not null,
    primary key (customer_coffee_id, coffee_id, customer_id),
    foreign key (coffee_id) references Coffee(coffee_id),
    foreign key (customer_id) references Customer(customer_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Order_coffee (
    order_coffee_id int not null auto_increment,
    coffee_id int not null,
    order_id int not null,
    bag_id int not null,
    ground_level_id int not null,
    quantity int(5) not null,
    primary key (order_coffee_id, coffee_id, order_id),
    foreign key (coffee_id) references Coffee(coffee_id),
    foreign key (order_id) references Orders(order_id),
    foreign key (bag_id) references Bag(bag_id),
    foreign key (ground_level_id) references Ground_level(ground_level_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Coffee_type (
    coffee_type_id int not null auto_increment,
    coffee_id int not null,
    type_id int not null,
    primary key (coffee_type_id, coffee_id, type_id),
    foreign key (coffee_id) references Coffee(coffee_id),
    foreign key (type_id) references Type(type_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;

create table Bag_customer (
    bag_customer_id int not null auto_increment,
    customer_id int not null,
    bag_id int not null,
    primary key (bag_customer_id, customer_id, bag_id),
    foreign key (bag_id) references Bag(bag_id),
    foreign key (customer_id) references Customer(customer_id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1;


