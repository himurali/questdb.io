# Modifying Data

QuestDB is a timeseries database optimized to append data.

For best performance, design your application to avoid having to frequently
edit existing records.

 statement is available in QuestDB
since version 6.4, `DELETE` is also planned to be included in upcoming releases.
However, they are intended for correcting data that was inserted incorrectly
or should have never been inserted in the first place (for example as part
of data administration tasks).
 