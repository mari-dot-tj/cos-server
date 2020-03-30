INSERT INTO Category (name, description) VALUES
    ('En kategori', 'Denne kategorien med kaffe smaker veldig godt!'),
    ('En annen kategori', 'Denne kategorien smaker ikke så godt...');

INSERT INTO Coffee (name, description, category_id) VALUES
('Brazil', 'Lett go kaffe med rund smak sier vi', 1),
('Mona kaffe', 'Bla bla bla bla', 1),
('Mari KAffe', 'Bla bla bla bla', 1),
('Rinsai kaffe', 'Lett go kaffe med rund smak sier vi', 2),
('Fredrik kaffe', 'Lett go kaffe med rund smak sier vi', 2),
('En til', 'Lett go kaffe med rund smak sier vi', 2),
('To kaffe', 'Lett go kaffe med rund smak sier vi', 2),
('tre kaffe', 'Lett go kaffe med rund smak sier vi', 1),
('Afrika', 'Lett go kaffe med rund smak sier vi', 2);

INSERT INTO
    `Jacobsen_Svart` (
        `email`,
        `superuser`,
        `phone`,
        `password`,
        `secret`) 
VALUES
    (
        "Cras@NuncmaurisMorbi.edu",
        0,
        "00008881",
        "mi enim, condimentum",
        "massa"
    ),
    (
        "Curabitur.vel@netusetmalesuada.com",
        1,
        "99498616",
        "ac metus vitae",
        "Curabitur"
    );
INSERT INTO
    `Mail_price` (
        `name`,
        `price`
        ) 
VALUES
    (
        "Up to 2 kg",
        49
    ),
    (
        "Up to 10 kg",
        149
    ),
    (
        "Up to 25 kg",
        269
    ),
    (
        "Up to 35 kg",
        389
    );

INSERT INTO
    `Constants` (
        `weight_loss`,
        `avg_batches_pr_hour`,
        `grinding_fee`,
        `order_before_prod_day`
    )
VALUES
    (1.14, 2.2, 141, "2019-08-08");

INSERT INTO
    `Ground_level` (`level_name`, `grinding_fee`)
VALUES
    ("Nullam", 110),
    ("et,", 148),
    ("quis", 111),
    ("Aliquam", 128);

INSERT INTO
    `Prod_day` (`day_of_week`)
VALUES
    ("tirsdag"),
    ("torsdag");

INSERT INTO
    `Delivery_day` (`day_of_week`)
VALUES
    ("2020-08-14");

INSERT INTO
    `Delivery` (`delivery_option`, `price`)
VALUES
    ("sagittis semper.", 114),
    ("magna. Suspendisse", 103),
    ("eget, venenatis", 113);

INSERT INTO
    `Place` (`zip_code`, `province`)
VALUES
    (4063, "leo elementum"),
    (5607, "penatibus"),
    (7725, "in"),
    (7977, "Fusce mollis."),
    (7941, "sapien"),
    (2292, "Cras eget"),
    (2851, "sapien."),
    (9463, "non,"),
    (9451, "metus vitae"),
    (2699, "vestibulum"),
    (0001, "lobortis ultrices."),
    (2421, "et pede."),
    (1969, "vulputate"),
    (1405, "et"),
    (4724, "malesuada ut,"),
    (9858, "eros turpis"),
    (5272, "odio. Nam"),
    (2169, "Mauris eu"),
    (6803, "ad"),
    (1185, "nulla magna,"),
    (5259, "ornare,"),
    (7976, "dapibus"),
    (2742, "Maecenas ornare"),
    (1321, "feugiat."),
    (3429, "velit"),
    (1776, "lorem fringilla"),
    (9339, "ligula. Nullam"),
    (7180, "lorem,"),
    (4259, "a,"),
    (2166, "pede. Nunc");

INSERT INTO
    `Reference` (`name`, `phone`)
VALUES
    ("Aliquam", "69018498"),
    ("aliquet", "41096049"),
    ("tincidunt", "57025516"),
    ("nec", "14968672"),
    ("Integer", "46790987");

INSERT INTO
    `Order_status` (`status_name`)
VALUES
    ("status1"),
    ("status2"),
    ("status3"),
    ("status4"),
    ("status5"),
    ("status6"),
    ("status7");

INSERT INTO
    `Type` (`name`, `batch_size`)
VALUES
    ("Espresso", 12),
    ("Filter", 9);

INSERT INTO
    `Bag` (`size`, `grams`)
VALUES
    ("1 KG", 1000),
    ("250 grams", 250),
    ("600 grams", 600);

INSERT INTO
    `Customer` (
        `name`,
        `address`,
        `phone`,
        `org_number`,
        `email`,
        `active`,
        `password`,
        `secret`,
        `subsciption`,
        `zip_code`,
        `ref_id`
    )
VALUES
    (
        "Felis Associates",
        "Ap #466-2100 Et Street",
        "65907843",
        "032601032",
        "cursus@urnaUttincidunt.org",
        "1",
        "Lorem ipsum dolor sit",
        "Integer mollis.",
        "0",
        0001,
        2
    ),
    (
        "Nulla Magna Malesuada Institute",
        "P.O. Box 935, 1130 Curabitur St.",
        "12173816",
        "342293222",
        "eros.Nam@Donectemporest.org",
        "0",
        "Lorem ipsum dolor sit",
        "venenatis a,",
        "1",
        2169,
        5
    ),
    (
        "Aliquam Nec Enim LLP",
        "478-4658 Turpis Av.",
        "38300649",
        "153291592",
        "faucibus.ut@cursuspurusNullam.edu",
        "1",
        "Lorem ipsum dolor sit amet, consectetuer",
        "Nullam scelerisque",
        "0",
        2169,
        5
    ),
    (
        "Rutrum Magna Cras Associates",
        "Ap #514-7339 Molestie St.",
        "67785373",
        "636767920",
        "a@nectempus.edu",
        "0",
        "Lorem ipsum dolor sit amet,",
        "magna a",
        "1",
        2169,
        5
    ),
    (
        "Egestas Foundation",
        "Ap #611-958 Arcu Rd.",
        "15300824",
        "679213106",
        "fermentum.arcu@infaucibus.edu",
        "0",
        "Lorem ipsum dolor sit amet, consectetuer",
        "mi lorem,",
        "1",
        9451,
        1
    ),
    (
        "At Pede Cras Corporation",
        "1155 Suspendisse St.",
        "38446579",
        "437235019",
        "nibh.enim.gravida@cursusvestibulum.ca",
        "1",
        "Lorem ipsum dolor sit amet, consectetuer",
        "risus. Donec",
        "0",
        7725,
        4
    ),
    (
        "Nunc Quis Institute",
        "P.O. Box 688, 5805 A, Avenue",
        "80869731",
        "184910481",
        "nisi.Mauris.nulla@congue.net",
        "1",
        "Lorem ipsum dolor sit amet, consectetuer",
        "et magnis",
        "1",
        4063,
        1
    ),
    (
        "Ut Dolor Dapibus Industries",
        "485 Dui, St.",
        "21592721",
        "852834227",
        "Ut.tincidunt.vehicula@ligula.net",
        "0",
        "Lorem ipsum dolor",
        "eget magna.",
        "0",
        4063,
        2
    ),
    (
        "Eget LLC",
        "663-6048 Etiam St.",
        "68310688",
        "414204901",
        "Vestibulum.accumsan.neque@QuisquevariusNam.com",
        "1",
        "Lorem ipsum dolor",
        "Morbi neque",
        "0",
        2166,
        2
    ),
    (
        "A Corporation",
        "Ap #147-5498 Malesuada Rd.",
        "06766882",
        "919657526",
        "et@nulla.net",
        "1",
        "Lorem ipsum dolor sit amet,",
        "sagittis. Nullam",
        "1",
        2166,
        3
    ),
    (
        "Velit Pellentesque PC",
        "319-3307 Nec, Av.",
        "43727494",
        "398595782",
        "in@eget.ca",
        "1",
        "Lorem ipsum dolor sit",
        "velit. Quisque",
        "1",
        7977,
        2
    ),
    (
        "Dictum Ultricies Corp.",
        "9616 Enim Rd.",
        "66126159",
        "492278672",
        "ullamcorper.velit@vulputateeu.net",
        "1",
        "Lorem ipsum dolor sit",
        "egestas blandit.",
        "1",
        9463,
        5
    ),
    (
        "Dapibus Ligula Consulting",
        "1723 Donec Av.",
        "04136978",
        "436275470",
        "semper.auctor.Mauris@Aliquam.co.uk",
        "1",
        "Lorem ipsum dolor",
        "Donec porttitor",
        "0",
        4259,
        4
    ),
    (
        "Aliquam Eros Corp.",
        "Ap #890-2400 Turpis. Avenue",
        "24738835",
        "349516660",
        "accumsan@diam.com",
        "1",
        "Lorem ipsum dolor sit amet,",
        "Sed neque.",
        "0",
        1969,
        1
    ),
    (
        "Eu Tellus Eu LLP",
        "8034 Arcu. Rd.",
        "39373140",
        "714313134",
        "ultrices.mauris.ipsum@semvitae.edu",
        "0",
        "Lorem ipsum dolor",
        "pellentesque a,",
        "0",
        1969,
        5
    );

INSERT INTO
    `Coffee` (`name`, `description`, `category_id`)
VALUES
    (
        "Vestibulum ut",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
        3
    ),
    (
        "elit, dictum",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
        3
    ),
    (
        "lobortis tellus",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
        3
    ),
    (
        "Aliquam tincidunt,",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
        4
    ),
    (
        "nunc sed",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus.",
        2
    ),
    (
        "adipiscing, enim",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu",
        1
    ),
    (
        "Aliquam vulputate",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida non,",
        4
    ),
    (
        "eget, ipsum.",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus",
        3
    ),
    (
        "tellus non",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu imperdiet ullamcorper. Duis at lacus. Quisque purus sapien, gravida",
        3
    ),
    (
        "tincidunt pede",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et arcu",
        5
    );

INSERT INTO
    `Orders` (
        `info`,
        `delivery_date`,
        `customer_id`,
        `status_id`,
        `delivery_id`,
        `ref_id`
    )
VALUES
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut",
        "2021-02-15",
        12,
        5,
        2,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
        "2020-08-11",
        4,
        1,
        2,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec",
        "2020-06-07",
        9,
        1,
        3,
        3
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam",
        "2020-01-05",
        6,
        2,
        1,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam",
        "2020-08-27",
        11,
        1,
        1,
        3
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
        "2021-02-04",
        4,
        6,
        3,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
        "2021-02-26",
        15,
        5,
        1,
        3
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor.",
        "2020-12-29",
        14,
        6,
        3,
        5
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor.",
        "2019-07-07",
        7,
        1,
        3,
        2
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
        "2021-03-24",
        5,
        7,
        3,
        3
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor.",
        "2020-01-24",
        1,
        7,
        2,
        1
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam",
        "2020-08-18",
        9,
        7,
        3,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
        "2020-12-27",
        5,
        4,
        1,
        3
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut",
        "2020-07-17",
        10,
        2,
        2,
        5
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor.",
        "2021-01-11",
        13,
        2,
        1,
        2
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
        "2019-10-12",
        10,
        5,
        2,
        5
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer",
        "2019-11-19",
        8,
        2,
        2,
        5
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus. Ut nec urna et",
        "2020-05-31",
        10,
        2,
        1,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed",
        "2019-10-05",
        11,
        1,
        3,
        4
    ),
    (
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur sed tortor. Integer aliquam adipiscing lacus.",
        "2020-12-01",
        12,
        5,
        1,
        4
    );

INSERT INTO
    `Fixed_order` (`order_interval`, `day_of_week`, `order_id`)
VALUES
    (1, "wednesday,", 16),
    (2, "friday", 11),
    (4, "monday", 14);

INSERT INTO
    `Customer_coffee` (`coffee_id`, `customer_id`, `price`)
VALUES
    (1, 1, 100),
    (1, 2, 100),
    (1, 3, 100),
    (1, 4, 100),
    (1, 5, 100),
    (1, 6, 100),
    (1, 7, 100),
    (1, 8, 100),
    (1, 9, 100),
    (1, 10, 100),
    (1, 11, 100),
    (1, 12, 100),
    (1, 13, 100),
    (1, 14, 100),
    (1, 15, 100),
    (2, 1, 101),
    (2, 2, 101),
    (2, 3, 101),
    (2, 4, 101),
    (2, 5, 101),
    (2, 6, 101),
    (2, 7, 101),
    (2, 8, 101),
    (2, 9, 101),
    (2, 10, 101),
    (2, 11, 101),
    (2, 12, 101),
    (2, 13, 101),
    (2, 14, 101),
    (2, 15, 101),
    (3, 1, 101),
    (3, 2, 101),
    (3, 3, 101),
    (3, 4, 101),
    (3, 5, 101),
    (3, 6, 101),
    (3, 7, 101),
    (3, 8, 101),
    (3, 9, 101),
    (3, 10, 101),
    (3, 11, 101),
    (3, 12, 101),
    (3, 13, 101),
    (3, 14, 101),
    (3, 15, 101),
    (4, 1, 101),
    (4, 2, 101),
    (4, 3, 101),
    (4, 4, 101),
    (4, 5, 101),
    (4, 6, 101),
    (4, 7, 101),
    (4, 8, 101),
    (4, 9, 101),
    (4, 10, 101),
    (4, 11, 101),
    (4, 12, 101),
    (4, 13, 101),
    (4, 14, 101),
    (4, 15, 101),
    (5, 1, 101),
    (5, 2, 101),
    (5, 3, 101),
    (5, 4, 101),
    (5, 5, 101),
    (5, 6, 101),
    (5, 7, 101),
    (5, 8, 101),
    (5, 9, 101),
    (5, 10, 101),
    (5, 11, 101),
    (5, 12, 101),
    (5, 13, 101),
    (5, 14, 101),
    (5, 15, 101),
    (6, 1, 101),
    (6, 2, 101),
    (6, 3, 101),
    (6, 4, 101),
    (6, 5, 101),
    (6, 6, 101),
    (6, 7, 101),
    (6, 8, 101),
    (6, 9, 101),
    (6, 10, 101),
    (6, 11, 101),
    (6, 12, 101),
    (6, 13, 101),
    (6, 14, 101),
    (6, 15, 101),
    (7, 1, 101),
    (7, 2, 101),
    (7, 3, 101),
    (7, 4, 101),
    (7, 5, 101),
    (7, 6, 101),
    (7, 7, 101),
    (7, 8, 101),
    (7, 9, 101),
    (7, 10, 101),
    (7, 11, 101),
    (7, 12, 101),
    (7, 13, 101),
    (7, 14, 101),
    (7, 15, 101),
    (8, 1, 101),
    (8, 2, 101),
    (8, 3, 101),
    (8, 4, 101),
    (8, 5, 101),
    (8, 6, 101),
    (8, 7, 101),
    (8, 8, 101),
    (8, 9, 101),
    (8, 10, 101),
    (8, 11, 101),
    (8, 12, 101),
    (8, 13, 101),
    (8, 14, 101),
    (8, 15, 101),
    (9, 1, 101),
    (9, 2, 101),
    (9, 3, 101),
    (9, 4, 101),
    (9, 5, 101),
    (9, 6, 101),
    (9, 7, 101),
    (9, 8, 101),
    (9, 9, 101),
    (9, 10, 101),
    (9, 11, 101),
    (9, 12, 101),
    (9, 13, 101),
    (9, 14, 101),
    (9, 15, 101),
    (10, 1, 101),
    (10, 2, 101),
    (10, 3, 101),
    (10, 4, 101),
    (10, 5, 101),
    (10, 6, 101),
    (10, 7, 101),
    (10, 8, 101),
    (10, 9, 101),
    (10, 10, 101),
    (10, 11, 101),
    (10, 12, 101),
    (10, 13, 101),
    (10, 14, 101),
    (10, 15, 101);

INSERT INTO
    `Order_coffee` (
        `coffee_id`,
        `order_id`,
        `bag_id`,
        `ground_level_id`,
        `quantity`
    )
VALUES
    (1, 1, 1, 1, 2),
    (1, 2, 2, 4, 3),
    (1, 3, 2, 2, 3),
    (1, 4, 2, 4, 3),
    (1, 5, 1, 3, 3),
    (1, 6, 2, 2, 2),
    (1, 7, 2, 4, 1),
    (2, 8, 2, 3, 3),
    (2, 1, 1, 3, 1),
    (2, 10, 2, 2, 3),
    (1, 11, 2, 3, 1),
    (1, 12, 2, 1, 2),
    (9, 1, 1, 3, 2),
    (10, 1, 1, 3, 3),
    (1, 15, 2, 3, 2),
    (2, 1, 1, 1, 2),
    (9, 2, 1, 4, 3),
    (10, 3, 2, 2, 3),
    (3, 4, 2, 4, 3),
    (3, 5, 1, 3, 3),
    (4, 6, 2, 2, 2),
    (10, 7, 2, 4, 1),
    (4, 8, 2, 3, 3),
    (5, 9, 1, 3, 1),
    (5, 10, 2, 2, 3),
    (6, 11, 2, 3, 1),
    (6, 12, 3, 1, 2),
    (7, 13, 1, 3, 2),
    (7, 14, 1, 3, 3),
    (8, 15, 2, 3, 2);

INSERT INTO
    `Coffee_type` (`coffee_id`, `type_id`)
VALUES
    (1, 2),
    (2, 2),
    (3, 1),
    (4, 1),
    (5, 2),
    (6, 2),
    (7, 2),
    (8, 1),
    (9, 2),
    (10, 1),
    (2, 1),
    (7, 1),
    (10, 2),
    (4, 2);

INSERT INTO
    `Bag_customer` (`customer_id`, `bag_id`)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 1),
    (5, 1),
    (6, 1),
    (7, 1),
    (8, 1),
    (9, 1),
    (10, 1),
    (11, 1),
    (12, 1),
    (13, 1),
    (14, 1),
    (15, 1),
    (1, 2),
    (2, 2),
    (3, 2),
    (4, 2),
    (5, 2),
    (6, 2),
    (7, 2),
    (8, 2),
    (9, 2),
    (10, 2),
    (11, 2),
    (12, 2),
    (13, 2),
    (14, 2),
    (15, 2),
    (1, 3),
    (2, 3),
    (13, 3),
    (14, 3);