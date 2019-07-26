--
-- PostgreSQL database dump
--

-- Dumped from database version 10.6
-- Dumped by pg_dump version 11.2 (Ubuntu 11.2-1.pgdg16.04+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: test; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA test;


ALTER SCHEMA test OWNER TO postgres;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: action; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.action (
    id integer NOT NULL,
    action_type_id integer NOT NULL,
    description character varying,
    "timestamp" timestamp without time zone DEFAULT timezone('utc'::text, now()) NOT NULL,
    visibility boolean NOT NULL,
    priority_id integer NOT NULL,
    user_id integer NOT NULL,
    title character varying
);


ALTER TABLE test.action OWNER TO postgres;

--
-- Name: action_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.action_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.action_id_seq OWNER TO postgres;

--
-- Name: action_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.action_id_seq OWNED BY test.action.id;


--
-- Name: action_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.action_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.action_type OWNER TO postgres;

--
-- Name: action_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.action_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.action_type_id_seq OWNER TO postgres;

--
-- Name: action_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.action_type_id_seq OWNED BY test.action_type.id;


--
-- Name: notifiication_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.notifiication_type (
    id integer NOT NULL,
    type character varying NOT NULL
);


ALTER TABLE test.notifiication_type OWNER TO postgres;

--
-- Name: notifiication_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.notifiication_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.notifiication_type_id_seq OWNER TO postgres;

--
-- Name: notifiication_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.notifiication_type_id_seq OWNED BY test.notifiication_type.id;


--
-- Name: organization; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.organization (
    id integer NOT NULL,
    organization_type_id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    district character varying NOT NULL,
    logo_url character varying,
    map_url character varying,
    website_url character varying,
    mailing_address character varying,
    meeting_location character varying
);


ALTER TABLE test.organization OWNER TO postgres;

--
-- Name: organization_contact; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.organization_contact (
    id integer NOT NULL,
    user_id integer NOT NULL,
    organization_id integer NOT NULL
);


ALTER TABLE test.organization_contact OWNER TO postgres;

--
-- Name: organization_contact_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.organization_contact_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.organization_contact_id_seq OWNER TO postgres;

--
-- Name: organization_contact_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.organization_contact_id_seq OWNED BY test.organization_contact.id;


--
-- Name: organization_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.organization_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.organization_id_seq OWNER TO postgres;

--
-- Name: organization_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.organization_id_seq OWNED BY test.organization.id;


--
-- Name: organization_owner; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.organization_owner (
    id integer NOT NULL,
    user_id integer NOT NULL,
    organization_id integer NOT NULL
);


ALTER TABLE test.organization_owner OWNER TO postgres;

--
-- Name: organization_social_media; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.organization_social_media (
    id integer NOT NULL,
    organization_id integer NOT NULL,
    type character varying NOT NULL,
    url character varying NOT NULL
);


ALTER TABLE test.organization_social_media OWNER TO postgres;

--
-- Name: organization_social_media_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.organization_social_media_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.organization_social_media_id_seq OWNER TO postgres;

--
-- Name: organization_social_media_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.organization_social_media_id_seq OWNED BY test.organization_social_media.id;


--
-- Name: organization_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.organization_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.organization_type OWNER TO postgres;

--
-- Name: organization_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.organization_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.organization_type_id_seq OWNER TO postgres;

--
-- Name: organization_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.organization_type_id_seq OWNED BY test.organization_type.id;


--
-- Name: organizationowners_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.organizationowners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.organizationowners_id_seq OWNER TO postgres;

--
-- Name: organizationowners_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.organizationowners_id_seq OWNED BY test.organization_owner.id;


--
-- Name: priority; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.priority (
    id integer NOT NULL,
    priority_type_id integer NOT NULL,
    description character varying NOT NULL,
    visibility boolean NOT NULL,
    priority_status_type_id integer NOT NULL,
    organization_id integer NOT NULL,
    rank integer NOT NULL,
    user_id integer NOT NULL
);


ALTER TABLE test.priority OWNER TO postgres;

--
-- Name: priority_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.priority_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.priority_id_seq OWNER TO postgres;

--
-- Name: priority_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.priority_id_seq OWNED BY test.priority.id;


--
-- Name: priority_status_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.priority_status_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.priority_status_type OWNER TO postgres;

--
-- Name: priority_status_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.priority_status_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.priority_status_type_id_seq OWNER TO postgres;

--
-- Name: priority_status_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.priority_status_type_id_seq OWNED BY test.priority_status_type.id;


--
-- Name: priority_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.priority_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.priority_type OWNER TO postgres;

--
-- Name: priority_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.priority_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.priority_type_id_seq OWNER TO postgres;

--
-- Name: priority_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.priority_type_id_seq OWNED BY test.priority_type.id;


--
-- Name: resource; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.resource (
    id integer NOT NULL,
    name character varying NOT NULL,
    description character varying NOT NULL,
    link character varying,
    user_id integer NOT NULL,
    resource_type_id integer NOT NULL
);


ALTER TABLE test.resource OWNER TO postgres;

--
-- Name: resource_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.resource_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.resource_type OWNER TO postgres;

--
-- Name: resource_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.resource_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.resource_type_id_seq OWNER TO postgres;

--
-- Name: resource_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.resource_type_id_seq OWNED BY test.resource_type.id;


--
-- Name: resources_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.resources_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.resources_id_seq OWNER TO postgres;

--
-- Name: resources_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.resources_id_seq OWNED BY test.resource.id;


--
-- Name: user; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test."user" (
    id integer NOT NULL,
    password character varying NOT NULL,
    first_name character varying NOT NULL,
    last_name character varying NOT NULL,
    user_type_id integer NOT NULL,
    phone character varying NOT NULL,
    email character varying NOT NULL,
    organization_id integer,
    notification_type_id integer DEFAULT 1 NOT NULL
);


ALTER TABLE test."user" OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.user_id_seq OWNER TO postgres;

--
-- Name: user_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.user_id_seq OWNED BY test."user".id;


--
-- Name: user_type; Type: TABLE; Schema: test; Owner: postgres
--

CREATE TABLE test.user_type (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE test.user_type OWNER TO postgres;

--
-- Name: user_type_id_seq; Type: SEQUENCE; Schema: test; Owner: postgres
--

CREATE SEQUENCE test.user_type_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE test.user_type_id_seq OWNER TO postgres;

--
-- Name: user_type_id_seq; Type: SEQUENCE OWNED BY; Schema: test; Owner: postgres
--

ALTER SEQUENCE test.user_type_id_seq OWNED BY test.user_type.id;


--
-- Name: action id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action ALTER COLUMN id SET DEFAULT nextval('test.action_id_seq'::regclass);


--
-- Name: action_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action_type ALTER COLUMN id SET DEFAULT nextval('test.action_type_id_seq'::regclass);


--
-- Name: notifiication_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.notifiication_type ALTER COLUMN id SET DEFAULT nextval('test.notifiication_type_id_seq'::regclass);


--
-- Name: organization id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization ALTER COLUMN id SET DEFAULT nextval('test.organization_id_seq'::regclass);


--
-- Name: organization_contact id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_contact ALTER COLUMN id SET DEFAULT nextval('test.organization_contact_id_seq'::regclass);


--
-- Name: organization_owner id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_owner ALTER COLUMN id SET DEFAULT nextval('test.organizationowners_id_seq'::regclass);


--
-- Name: organization_social_media id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_social_media ALTER COLUMN id SET DEFAULT nextval('test.organization_social_media_id_seq'::regclass);


--
-- Name: organization_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_type ALTER COLUMN id SET DEFAULT nextval('test.organization_type_id_seq'::regclass);


--
-- Name: priority id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority ALTER COLUMN id SET DEFAULT nextval('test.priority_id_seq'::regclass);


--
-- Name: priority_status_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority_status_type ALTER COLUMN id SET DEFAULT nextval('test.priority_status_type_id_seq'::regclass);


--
-- Name: priority_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority_type ALTER COLUMN id SET DEFAULT nextval('test.priority_type_id_seq'::regclass);


--
-- Name: resource id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource ALTER COLUMN id SET DEFAULT nextval('test.resources_id_seq'::regclass);


--
-- Name: resource_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource_type ALTER COLUMN id SET DEFAULT nextval('test.resource_type_id_seq'::regclass);


--
-- Name: user id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test."user" ALTER COLUMN id SET DEFAULT nextval('test.user_id_seq'::regclass);


--
-- Name: user_type id; Type: DEFAULT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.user_type ALTER COLUMN id SET DEFAULT nextval('test.user_type_id_seq'::regclass);


--
-- Data for Name: action; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.action (id, action_type_id, description, "timestamp", visibility, priority_id, user_id, title) VALUES (1, 1, 'a much longer description', '2019-07-20 21:21:06.440707', true, 1, 2, 'city to conduct clean-up day');
INSERT INTO test.action (id, action_type_id, description, "timestamp", visibility, priority_id, user_id, title) VALUES (2, 1, 'a WAY longer description.............................', '2019-07-20 21:21:06.460614', true, 1, 3, 'clean-up day completed successfully!');
INSERT INTO test.action (id, action_type_id, description, "timestamp", visibility, priority_id, user_id, title) VALUES (3, 1, 'test', '2019-07-21 23:06:10.237091', true, 2, 1, 'This is a title');


--
-- Data for Name: action_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.action_type (id, name) VALUES (1, 'comment');


--
-- Data for Name: notifiication_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.notifiication_type (id, type) VALUES (1, 'Email');
INSERT INTO test.notifiication_type (id, type) VALUES (3, 'Both');
INSERT INTO test.notifiication_type (id, type) VALUES (2, 'SMS');


--
-- Data for Name: organization; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.organization (id, organization_type_id, name, description, district, logo_url, map_url, website_url, mailing_address, meeting_location) VALUES (2, 1, 'Avondale Glen Elder Neighborhood Association', '', '6', NULL, NULL, 'https://www.facebook.com/avondaleglenelder', '7805 Vallecitos Way Sacramento, CA 95828', 'George Sim Community Center 6207 Logan Street Sacramento, CA 95824 916-808-3761');
INSERT INTO test.organization (id, organization_type_id, name, description, district, logo_url, map_url, website_url, mailing_address, meeting_location) VALUES (3, 1, 'Ben Ali Community Association', '', '2', NULL, NULL, NULL, '1725 Frienza Avenue Sacramento, CA 95815', 'Higher Learning Academy 2625 Plover Street Sacramento, CA 95815');
INSERT INTO test.organization (id, organization_type_id, name, description, district, logo_url, map_url, website_url, mailing_address, meeting_location) VALUES (4, 1, 'Midtown', 'hip happenin', '5', 'www.123.com', 'www.456.com', 'www.678.com', '555 davis road', '789 balzak place');
INSERT INTO test.organization (id, organization_type_id, name, description, district, logo_url, map_url, website_url, mailing_address, meeting_location) VALUES (1, 1, 'Alkali and Mansion Flats Historic Neighborhood Association', '', '4', NULL, NULL, 'http://alkalimansionflats.org/', '1326 E Street Sacramento, CA 95814', 'Boys and Girls Club of America 1117 G Street Sacramento, CA 95814');


--
-- Data for Name: organization_contact; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.organization_contact (id, user_id, organization_id) VALUES (1, 4, 2);
INSERT INTO test.organization_contact (id, user_id, organization_id) VALUES (2, 5, 3);
INSERT INTO test.organization_contact (id, user_id, organization_id) VALUES (3, 1, 1);


--
-- Data for Name: organization_owner; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.organization_owner (id, user_id, organization_id) VALUES (1, 8, 1);
INSERT INTO test.organization_owner (id, user_id, organization_id) VALUES (2, 9, 2);
INSERT INTO test.organization_owner (id, user_id, organization_id) VALUES (3, 7, 3);


--
-- Data for Name: organization_social_media; Type: TABLE DATA; Schema: test; Owner: postgres
--



--
-- Data for Name: organization_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.organization_type (id, name) VALUES (1, 'Neighborhood Association');
INSERT INTO test.organization_type (id, name) VALUES (2, 'PBID');


--
-- Data for Name: priority; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.priority (id, priority_type_id, description, visibility, priority_status_type_id, organization_id, rank, user_id) VALUES (1, 4, 'a description of some illegal dumping', true, 1, 2, 1, 1);
INSERT INTO test.priority (id, priority_type_id, description, visibility, priority_status_type_id, organization_id, rank, user_id) VALUES (3, 3, 'graffiti EVERYWHERE!!', true, 2, 3, 1, 3);
INSERT INTO test.priority (id, priority_type_id, description, visibility, priority_status_type_id, organization_id, rank, user_id) VALUES (2, 8, 'Some issues with homelessness', true, 4, 1, 1, 2);


--
-- Data for Name: priority_status_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.priority_status_type (id, name) VALUES (1, 'Pending');
INSERT INTO test.priority_status_type (id, name) VALUES (2, 'Accepted');
INSERT INTO test.priority_status_type (id, name) VALUES (3, 'Rejected');
INSERT INTO test.priority_status_type (id, name) VALUES (4, 'Working');
INSERT INTO test.priority_status_type (id, name) VALUES (5, 'Resolved');


--
-- Data for Name: priority_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.priority_type (id, name) VALUES (1, 'Animals');
INSERT INTO test.priority_type (id, name) VALUES (2, 'City Parks');
INSERT INTO test.priority_type (id, name) VALUES (3, 'Code Violation and Graffiti');
INSERT INTO test.priority_type (id, name) VALUES (4, 'Garbage and Illegal Dumping');
INSERT INTO test.priority_type (id, name) VALUES (5, 'Streets and Lighting');
INSERT INTO test.priority_type (id, name) VALUES (6, 'Vehicle Complaints');
INSERT INTO test.priority_type (id, name) VALUES (7, 'Water, Sewer, and Drains');
INSERT INTO test.priority_type (id, name) VALUES (8, 'Homelessness');


--
-- Data for Name: resource; Type: TABLE DATA; Schema: test; Owner: postgres
--



--
-- Data for Name: resource_type; Type: TABLE DATA; Schema: test; Owner: postgres
--



--
-- Data for Name: user; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (2, 'abc123', 'Kriztina', 'Palone', 2, '1112223333', 'kpalone@cityofsacramento.org', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (3, 'abc123', 'Ash', 'Roughani', 3, '9998887777', 'aroughani@cityofsacramento.org', 3, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (4, 'abc123', 'Harrison', 'McCey', 1, '5556667777', 'harrison@mccey.com', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (5, 'abc123', 'Jonathan', 'Throne', 1, '6667778888', 'jon@throne.com', 3, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (1, 'abc123', 'Earl', 'Damron', 1, '4156081374', 'e@earldamron.com', 1, 3);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (7, 'supersecret', 'Pablo', 'Francisco', 1, '1231231234', 'wow@gmail.com', 1, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (8, 'abc123', 'Fred', 'Smith', 1, '7776668888', 'fred@smith.com', 1, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (9, 'abc123', 'Jane', 'Doe', 1, '7778886666', 'jane@does.com', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (14, 'abc11', 'Joana', 'Palone', 2, '1112223333', 'kpalone@cityofsacramento.orgs', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (17, 'abc11', 'Joana', 'Palone', 2, '1112223333', 'kpalone@cityofsacramento.orgss', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (18, 'abc11', 'Joana', 'Palone', 2, '1112223333', 'kpalone@cityofsacramento.orgsss', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (29, 'abc11', 'TestD', 'Test', 2, '1112223333', 'kpalone@cityofsacramento.orgssssssssssssss', 2, 1);
INSERT INTO test."user" (id, password, first_name, last_name, user_type_id, phone, email, organization_id, notification_type_id) VALUES (30, 'abc11', 'TestE', 'Test', 2, '1112223333', 'kpalone@cityofsacramento.orgssssssssssssssss', 2, 1);


--
-- Data for Name: user_type; Type: TABLE DATA; Schema: test; Owner: postgres
--

INSERT INTO test.user_type (id, name) VALUES (1, 'Leader');
INSERT INTO test.user_type (id, name) VALUES (2, 'Admin');
INSERT INTO test.user_type (id, name) VALUES (3, 'Staff');
INSERT INTO test.user_type (id, name) VALUES (4, 'Department');


--
-- Name: action_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.action_id_seq', 3, true);


--
-- Name: action_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.action_type_id_seq', 1, true);


--
-- Name: notifiication_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.notifiication_type_id_seq', 3, true);


--
-- Name: organization_contact_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.organization_contact_id_seq', 3, true);


--
-- Name: organization_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.organization_id_seq', 4, true);


--
-- Name: organization_social_media_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.organization_social_media_id_seq', 1, false);


--
-- Name: organization_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.organization_type_id_seq', 3, true);


--
-- Name: organizationowners_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.organizationowners_id_seq', 3, true);


--
-- Name: priority_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.priority_id_seq', 6, true);


--
-- Name: priority_status_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.priority_status_type_id_seq', 5, true);


--
-- Name: priority_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.priority_type_id_seq', 8, true);


--
-- Name: resource_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.resource_type_id_seq', 1, false);


--
-- Name: resources_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.resources_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.user_id_seq', 33, true);


--
-- Name: user_type_id_seq; Type: SEQUENCE SET; Schema: test; Owner: postgres
--

SELECT pg_catalog.setval('test.user_type_id_seq', 4, true);


--
-- Name: action Actions_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action
    ADD CONSTRAINT "Actions_pkey" PRIMARY KEY (id);


--
-- Name: organization Organization_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization
    ADD CONSTRAINT "Organization_pkey" PRIMARY KEY (id);


--
-- Name: priority Priority_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority
    ADD CONSTRAINT "Priority_pkey" PRIMARY KEY (id);


--
-- Name: user User_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test."user"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);


--
-- Name: action_type action_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action_type
    ADD CONSTRAINT action_type_pkey PRIMARY KEY (id);


--
-- Name: notifiication_type notifiication_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.notifiication_type
    ADD CONSTRAINT notifiication_type_pkey PRIMARY KEY (id);


--
-- Name: organization_contact organization_contact_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_contact
    ADD CONSTRAINT organization_contact_pkey PRIMARY KEY (id);


--
-- Name: organization_social_media organization_social_media_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_social_media
    ADD CONSTRAINT organization_social_media_pkey PRIMARY KEY (id);


--
-- Name: organization_type organization_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_type
    ADD CONSTRAINT organization_type_pkey PRIMARY KEY (id);


--
-- Name: organization_owner organizationowners_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_owner
    ADD CONSTRAINT organizationowners_pkey PRIMARY KEY (id);


--
-- Name: priority_status_type priority_status_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority_status_type
    ADD CONSTRAINT priority_status_type_pkey PRIMARY KEY (id);


--
-- Name: priority_type priority_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority_type
    ADD CONSTRAINT priority_type_pkey PRIMARY KEY (id);


--
-- Name: resource_type resource_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource_type
    ADD CONSTRAINT resource_type_pkey PRIMARY KEY (id);


--
-- Name: resource resources_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource
    ADD CONSTRAINT resources_pkey PRIMARY KEY (id);


--
-- Name: user_type user_type_pkey; Type: CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.user_type
    ADD CONSTRAINT user_type_pkey PRIMARY KEY (id);


--
-- Name: action_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX action_type_id_uindex ON test.action_type USING btree (id);


--
-- Name: action_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX action_type_name_uindex ON test.action_type USING btree (name);


--
-- Name: notifiication_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX notifiication_type_id_uindex ON test.notifiication_type USING btree (id);


--
-- Name: organization_contact_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_contact_id_uindex ON test.organization_contact USING btree (id);


--
-- Name: organization_contact_organization_id_user_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_contact_organization_id_user_id_uindex ON test.organization_contact USING btree (organization_id, user_id);


--
-- Name: organization_owner_organization_id_user_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_owner_organization_id_user_id_uindex ON test.organization_owner USING btree (organization_id, user_id);


--
-- Name: organization_social_media_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_social_media_id_uindex ON test.organization_social_media USING btree (id);


--
-- Name: organization_social_media_type_index; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_social_media_type_index ON test.organization_social_media USING btree (type, organization_id);


--
-- Name: organization_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_type_id_uindex ON test.organization_type USING btree (id);


--
-- Name: organization_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organization_type_name_uindex ON test.organization_type USING btree (name);


--
-- Name: organizationowners_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX organizationowners_id_uindex ON test.organization_owner USING btree (id);


--
-- Name: priority_organization_rank__index; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX priority_organization_rank__index ON test.priority USING btree (organization_id, rank);


--
-- Name: priority_status_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX priority_status_type_id_uindex ON test.priority_status_type USING btree (id);


--
-- Name: priority_status_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX priority_status_type_name_uindex ON test.priority_status_type USING btree (name);


--
-- Name: priority_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX priority_type_id_uindex ON test.priority_type USING btree (id);


--
-- Name: priority_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX priority_type_name_uindex ON test.priority_type USING btree (name);


--
-- Name: resource_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX resource_type_id_uindex ON test.resource_type USING btree (id);


--
-- Name: resource_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX resource_type_name_uindex ON test.resource_type USING btree (name);


--
-- Name: resources_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX resources_id_uindex ON test.resource USING btree (id);


--
-- Name: user_email_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX user_email_uindex ON test."user" USING btree (email);


--
-- Name: user_type_id_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX user_type_id_uindex ON test.user_type USING btree (id);


--
-- Name: user_type_name_uindex; Type: INDEX; Schema: test; Owner: postgres
--

CREATE UNIQUE INDEX user_type_name_uindex ON test.user_type USING btree (name);


--
-- Name: action action_type___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action
    ADD CONSTRAINT action_type___fk FOREIGN KEY (action_type_id) REFERENCES test.action_type(id);


--
-- Name: priority creatoruserid___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority
    ADD CONSTRAINT creatoruserid___fk FOREIGN KEY (user_id) REFERENCES test."user"(id);


--
-- Name: user notification___fk_2; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test."user"
    ADD CONSTRAINT notification___fk_2 FOREIGN KEY (notification_type_id) REFERENCES test.notifiication_type(id);


--
-- Name: user organization___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test."user"
    ADD CONSTRAINT organization___fk FOREIGN KEY (organization_id) REFERENCES test.organization(id);


--
-- Name: organization_owner organization___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_owner
    ADD CONSTRAINT organization___fk FOREIGN KEY (organization_id) REFERENCES test.organization(id);


--
-- Name: organization_contact organization___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_contact
    ADD CONSTRAINT organization___fk FOREIGN KEY (organization_id) REFERENCES test.organization(id);


--
-- Name: priority organization___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority
    ADD CONSTRAINT organization___fk FOREIGN KEY (organization_id) REFERENCES test.organization(id);


--
-- Name: organization_social_media organization___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_social_media
    ADD CONSTRAINT organization___fk FOREIGN KEY (organization_id) REFERENCES test.organization(id);


--
-- Name: organization organization_type___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization
    ADD CONSTRAINT organization_type___fk FOREIGN KEY (organization_type_id) REFERENCES test.organization_type(id);


--
-- Name: action priority___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action
    ADD CONSTRAINT priority___fk FOREIGN KEY (priority_id) REFERENCES test.priority(id);


--
-- Name: priority priority_status_type__fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority
    ADD CONSTRAINT priority_status_type__fk FOREIGN KEY (priority_status_type_id) REFERENCES test.priority_status_type(id);


--
-- Name: priority priority_type___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.priority
    ADD CONSTRAINT priority_type___fk FOREIGN KEY (priority_type_id) REFERENCES test.priority_type(id);


--
-- Name: resource resource_type___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource
    ADD CONSTRAINT resource_type___fk FOREIGN KEY (resource_type_id) REFERENCES test.resource_type(id);


--
-- Name: action user___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.action
    ADD CONSTRAINT user___fk FOREIGN KEY (user_id) REFERENCES test."user"(id);


--
-- Name: organization_owner user___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_owner
    ADD CONSTRAINT user___fk FOREIGN KEY (user_id) REFERENCES test."user"(id);


--
-- Name: organization_contact user___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.organization_contact
    ADD CONSTRAINT user___fk FOREIGN KEY (user_id) REFERENCES test."user"(id);


--
-- Name: resource user___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test.resource
    ADD CONSTRAINT user___fk FOREIGN KEY (user_id) REFERENCES test."user"(id);


--
-- Name: user user_type___fk; Type: FK CONSTRAINT; Schema: test; Owner: postgres
--

ALTER TABLE ONLY test."user"
    ADD CONSTRAINT user_type___fk FOREIGN KEY (user_type_id) REFERENCES test.user_type(id);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM rdsadmin;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

