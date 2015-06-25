/*! uw-db - v0.0.1 - 2015-06-25 */function Connection(a,b){this.results=[],this.Client=a,this.end=function(){a.end(),b()},this.addResult=function(a){this.results.push(a)},this.getLastResult=function(){return this.results[this.results.length-1]}}function PostgresSQL(a){var b=function(a,b,c){return function(d){LOG.debug(c||a);var e=Q.defer();return d.Client.query(a,b,function(a,b){a?e.reject(a):(d.addResult(b),e.resolve(d))}),e.promise}};this.open=function(){var b=UTIL.format("postgres://%s:%s@%s/%s",a.user,a.password,a.ip,a.dbname),c=Q.defer();return PG.connect(b,function(a,d,e){a?(LOG.error("Error creating connection ->"+a.message+" at "+b),c.reject(a)):c.resolve(new Connection(d,e))}),c.promise},this.begin=function(){return b("BEGIN",null,"BEGIN")},this.commit=function(){return b("COMMIT",null,"COMMIT")},this.rollback=function(){return b("ROLLBACK",null,"ROLLBACK")},this.rollbackAndRelease=function(){return function(a){var c=Q.defer();return b("ROLLBACK",null,"ROLLBACK").then(function(a){LOG.debug("END"),a.end()}),c.promise()}},this.end=function(){return function(a){LOG.debug("END"),a.end()}},this.query=function(a,c){return b(a,c)},this.showLastResult=function(){return function(a){return LOG.info("RESULTS"),a}}}var UTIL=require("util"),PG=require("pg"),Q=require("q"),MODULE="PostgreSQL",LOG=require("./Log").newInstance(MODULE);exports.newInstance=function(a){return new PostgresSQL(a)};