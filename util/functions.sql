CREATE PROCEDURE `proc_get_specific_customer_order`(IN in_order_id INT) BEGIN
SELECT
    O.order_id,
    O.order_date,
    O.info,
    O.delivery_date,
    O.production_date,
    OC.quantity,
    C.name,
    GL.level_name,
    B.size,
    OS.status_name,
    D.delivery_option
FROM
    Orders O
    INNER JOIN Order_coffee OC ON O.order_id = OC.order_id
    INNER JOIN Coffee C ON C.coffee_id = OC.coffee_id
    INNER JOIN Ground_level GL ON OC.ground_level_id = GL.ground_level_id
    INNER JOIN Bag B ON B.bag_id = OC.bag_id
    INNER JOIN Order_status OS ON OS.status_id = O.status_id
    INNER JOIN Delivery D ON D.delivery_id = O.delivery_id
WHERE
    O.order_id = in_order_id
ORDER BY
    quantity,
    name;
END -- 
CREATE PROCEDURE `proc_customer_by_token`(IN in_customer_id INT, IN in_token TEXT) BEGIN
SELECT
    c.customer_id,
    c.name,
    c.address,
    c.phone,
    c.org_number,
    c.email,
    c.active,
    c.subscription,
    c.zip_code,
    c.password
FROM
    Customer c
    INNER JOIN Tokens t ON c.customer_id = t.customer_id
WHERE
    c.customer_id = in_customer_id
    AND t.token = in_token;
END --
CREATE PROCEDURE `proc_get_customer_orders`(IN in_customer_id INT) BEGIN
SELECT
    O.order_id,
    O.order_date,
    O.info,
    O.delivery_date,
    O.production_date,
    OC.quantity,
    C.name,
    GL.level_name,
    B.size,
    OS.status_name,
    D.delivery_option
FROM
    Orders O
    INNER JOIN Order_coffee OC ON O.order_id = OC.order_id
    INNER JOIN Coffee C ON C.coffee_id = OC.coffee_id
    INNER JOIN Ground_level GL ON OC.ground_level_id = GL.ground_level_id
    INNER JOIN Bag B ON B.bag_id = OC.bag_id
    INNER JOIN Order_status OS ON OS.status_id = O.status_id
    INNER JOIN Delivery D ON D.delivery_id = O.delivery_id
WHERE
    O.customer_id = in_customer_id
ORDER BY
    order_id,
    quantity,
    name;
END --
CREATE PROCEDURE `proc_get_specific_customer_order`(IN in_order_id INT) BEGIN DECLARE out_interval TINYINT DEFAULT 0;
DECLARE out_day_of_week TINYINT DEFAULT 0;
SELECT
    FO.order_interval,
    FO.day_of_week INTO out_interval,
    out_day_of_week
FROM
    Fixed_order FO
WHERE
    FO.order_id = in_order_id;
SELECT
    O.order_id,
    O.order_date,
    O.info,
    O.delivery_date,
    O.production_date,
    OC.quantity,
    C.name,
    GL.level_name,
    B.size,
    OS.status_name,
    D.delivery_option,
    out_interval AS order_interval,
    out_day_of_week AS day_of_week
FROM
    Orders O
    INNER JOIN Order_coffee OC ON O.order_id = OC.order_id
    INNER JOIN Coffee C ON C.coffee_id = OC.coffee_id
    INNER JOIN Ground_level GL ON OC.ground_level_id = GL.ground_level_id
    INNER JOIN Bag B ON B.bag_id = OC.bag_id
    INNER JOIN Order_status OS ON OS.status_id = O.status_id
    INNER JOIN Delivery D ON D.delivery_id = O.delivery_id
WHERE
    O.order_id = in_order_id
ORDER BY
    quantity,
    name;
END --
DELIMITER $ $ CREATE TRIGGER after_customer_insert
AFTER
INSERT
    ON Customer FOR EACH ROW BEGIN
INSERT INTO
    Bag_customer (customer_id, bag_id)
SELECT
    NEW.customer_id,
    bag_id
FROM
    Bag;
INSERT INTO
    Customer_coffee (coffee_id, customer_id, price)
SELECT
    coffe_id,
    NEW.customer_id,
    '150'
FROM
    Coffee;
END $ $ DELIMITER;