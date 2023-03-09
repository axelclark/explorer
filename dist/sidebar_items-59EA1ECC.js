sidebarNodes={"extras":[{"group":"","headers":[{"anchor":"modules","id":"Modules"}],"id":"api-reference","title":"API Reference"},{"group":"","headers":[{"anchor":"introduction","id":"Introduction"},{"anchor":"reading-and-writing-data","id":"Reading and writing data"},{"anchor":"working-with-series","id":"Working with Series"},{"anchor":"working-with-dataframes","id":"Working with DataFrames"}],"id":"exploring_explorer","title":"Ten Minutes to Explorer"},{"group":"","headers":[{"anchor":"unreleased","id":"Unreleased"},{"anchor":"v0-5-4-2023-03-09","id":"v0.5.4 - 2023-03-09"},{"anchor":"v0-5-3-2023-03-08","id":"v0.5.3 - 2023-03-08"},{"anchor":"v0-5-2-2023-02-28","id":"v0.5.2 - 2023-02-28"},{"anchor":"v0-5-1-2023-02-17","id":"v0.5.1 - 2023-02-17"},{"anchor":"v0-5-0-2023-01-12","id":"v0.5.0 - 2023-01-12"},{"anchor":"v0-4-0-2022-11-29","id":"v0.4.0 - 2022-11-29"},{"anchor":"v0-3-1-2022-09-09","id":"v0.3.1 - 2022-09-09"},{"anchor":"v0-3-0-2022-09-01","id":"v0.3.0 - 2022-09-01"},{"anchor":"v0-2-0-2022-06-22","id":"v0.2.0 - 2022-06-22"},{"anchor":"v0-1-1-2022-04-27","id":"v0.1.1 - 2022-04-27"},{"anchor":"v0-1-0-2022-04-26","id":"v0.1.0 - 2022-04-26"}],"id":"changelog","title":"Changelog"}],"modules":[{"group":"","id":"Explorer","sections":[{"anchor":"module-getting-started","id":"Getting started"},{"anchor":"module-a-glimpse-of-the-api","id":"A glimpse of the API"},{"anchor":"module-features-and-design","id":"Features and design"}],"title":"Explorer"},{"group":"","id":"Explorer.DataFrame","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:column/0","id":"column/0","title":"column()"},{"anchor":"t:column_name/0","id":"column_name/0","title":"column_name()"},{"anchor":"t:column_names/0","id":"column_names/0","title":"column_names()"},{"anchor":"t:column_pairs/1","id":"column_pairs/1","title":"column_pairs(value)"},{"anchor":"t:columns/0","id":"columns/0","title":"columns()"},{"anchor":"t:t/0","id":"t/0","title":"t()"}]},{"key":"functions-conversion","name":"Functions: Conversion","nodes":[{"anchor":"collect/1","id":"collect/1","title":"collect(df)"},{"anchor":"new/2","id":"new/2","title":"new(data, opts \\\\ [])"},{"anchor":"to_columns/2","id":"to_columns/2","title":"to_columns(df, opts \\\\ [])"},{"anchor":"to_lazy/1","id":"to_lazy/1","title":"to_lazy(df)"},{"anchor":"to_rows/2","id":"to_rows/2","title":"to_rows(df, opts \\\\ [])"},{"anchor":"to_series/2","id":"to_series/2","title":"to_series(df, opts \\\\ [])"}]},{"key":"functions-single-table","name":"Functions: Single-table","nodes":[{"anchor":"arrange/2","id":"arrange/2","title":"arrange(df, query)"},{"anchor":"arrange_with/2","id":"arrange_with/2","title":"arrange_with(df, fun)"},{"anchor":"describe/2","id":"describe/2","title":"describe(df, opts \\\\ [])"},{"anchor":"discard/2","id":"discard/2","title":"discard(df, columns_or_column)"},{"anchor":"distinct/3","id":"distinct/3","title":"distinct(df, columns \\\\ 0..-1//1, opts \\\\ [])"},{"anchor":"drop_nil/2","id":"drop_nil/2","title":"drop_nil(df, columns_or_column \\\\ 0..-1//1)"},{"anchor":"dummies/2","id":"dummies/2","title":"dummies(df, columns_or_column)"},{"anchor":"filter/2","id":"filter/2","title":"filter(df, query)"},{"anchor":"filter_with/2","id":"filter_with/2","title":"filter_with(df, fun)"},{"anchor":"group_by/2","id":"group_by/2","title":"group_by(df, group)"},{"anchor":"mask/2","id":"mask/2","title":"mask(df, mask)"},{"anchor":"mutate/2","id":"mutate/2","title":"mutate(df, mutations)"},{"anchor":"mutate_with/2","id":"mutate_with/2","title":"mutate_with(df, fun)"},{"anchor":"pivot_longer/3","id":"pivot_longer/3","title":"pivot_longer(df, columns_to_pivot, opts \\\\ [])"},{"anchor":"pivot_wider/4","id":"pivot_wider/4","title":"pivot_wider(df, names_from, values_from, opts \\\\ [])"},{"anchor":"pull/2","id":"pull/2","title":"pull(df, column)"},{"anchor":"put/4","id":"put/4","title":"put(df, column_name, series_or_tensor_or_list, opts \\\\ [])"},{"anchor":"rename/2","id":"rename/2","title":"rename(df, names)"},{"anchor":"rename_with/3","id":"rename_with/3","title":"rename_with(df, columns \\\\ 0..-1//1, callback)"},{"anchor":"select/2","id":"select/2","title":"select(df, columns_or_column)"},{"anchor":"summarise/2","id":"summarise/2","title":"summarise(df, query)"},{"anchor":"summarise_with/2","id":"summarise_with/2","title":"summarise_with(df, fun)"},{"anchor":"ungroup/2","id":"ungroup/2","title":"ungroup(df, groups \\\\ 0..-1//1)"}]},{"key":"functions-multi-table","name":"Functions: Multi-table","nodes":[{"anchor":"concat_columns/1","id":"concat_columns/1","title":"concat_columns(dfs)"},{"anchor":"concat_columns/2","id":"concat_columns/2","title":"concat_columns(df1, df2)"},{"anchor":"concat_rows/1","id":"concat_rows/1","title":"concat_rows(dfs)"},{"anchor":"concat_rows/2","id":"concat_rows/2","title":"concat_rows(df1, df2)"},{"anchor":"join/3","id":"join/3","title":"join(left, right, opts \\\\ [])"}]},{"key":"functions-row-based","name":"Functions: Row-based","nodes":[{"anchor":"head/2","id":"head/2","title":"head(df, nrows \\\\ 5)"},{"anchor":"sample/3","id":"sample/3","title":"sample(df, n_or_frac, opts \\\\ [])"},{"anchor":"shuffle/2","id":"shuffle/2","title":"shuffle(df, opts \\\\ [])"},{"anchor":"slice/2","id":"slice/2","title":"slice(df, row_indices)"},{"anchor":"slice/3","id":"slice/3","title":"slice(df, offset, length)"},{"anchor":"tail/2","id":"tail/2","title":"tail(df, nrows \\\\ 5)"}]},{"key":"functions-introspection","name":"Functions: Introspection","nodes":[{"anchor":"dtypes/1","id":"dtypes/1","title":"dtypes(df)"},{"anchor":"groups/1","id":"groups/1","title":"groups(data_frame)"},{"anchor":"n_columns/1","id":"n_columns/1","title":"n_columns(df)"},{"anchor":"n_rows/1","id":"n_rows/1","title":"n_rows(df)"},{"anchor":"names/1","id":"names/1","title":"names(df)"},{"anchor":"shape/1","id":"shape/1","title":"shape(df)"},{"anchor":"table/2","id":"table/2","title":"table(df, opts \\\\ [])"}]},{"key":"functions-io","name":"Functions: IO","nodes":[{"anchor":"dump_csv/2","id":"dump_csv/2","title":"dump_csv(df, opts \\\\ [])"},{"anchor":"dump_csv!/2","id":"dump_csv!/2","title":"dump_csv!(df, opts \\\\ [])"},{"anchor":"dump_ipc/2","id":"dump_ipc/2","title":"dump_ipc(df, opts \\\\ [])"},{"anchor":"dump_ipc!/2","id":"dump_ipc!/2","title":"dump_ipc!(df, opts \\\\ [])"},{"anchor":"dump_ipc_stream/2","id":"dump_ipc_stream/2","title":"dump_ipc_stream(df, opts \\\\ [])"},{"anchor":"dump_ipc_stream!/2","id":"dump_ipc_stream!/2","title":"dump_ipc_stream!(df, opts \\\\ [])"},{"anchor":"dump_ndjson/1","id":"dump_ndjson/1","title":"dump_ndjson(df)"},{"anchor":"dump_ndjson!/1","id":"dump_ndjson!/1","title":"dump_ndjson!(df)"},{"anchor":"dump_parquet/2","id":"dump_parquet/2","title":"dump_parquet(df, opts \\\\ [])"},{"anchor":"dump_parquet!/2","id":"dump_parquet!/2","title":"dump_parquet!(df, opts \\\\ [])"},{"anchor":"from_csv/2","id":"from_csv/2","title":"from_csv(filename, opts \\\\ [])"},{"anchor":"from_csv!/2","id":"from_csv!/2","title":"from_csv!(filename, opts \\\\ [])"},{"anchor":"from_ipc/2","id":"from_ipc/2","title":"from_ipc(filename, opts \\\\ [])"},{"anchor":"from_ipc!/2","id":"from_ipc!/2","title":"from_ipc!(filename, opts \\\\ [])"},{"anchor":"from_ipc_stream/2","id":"from_ipc_stream/2","title":"from_ipc_stream(filename, opts \\\\ [])"},{"anchor":"from_ipc_stream!/2","id":"from_ipc_stream!/2","title":"from_ipc_stream!(filename, opts \\\\ [])"},{"anchor":"from_ndjson/2","id":"from_ndjson/2","title":"from_ndjson(filename, opts \\\\ [])"},{"anchor":"from_ndjson!/2","id":"from_ndjson!/2","title":"from_ndjson!(filename, opts \\\\ [])"},{"anchor":"from_parquet/2","id":"from_parquet/2","title":"from_parquet(filename, opts \\\\ [])"},{"anchor":"from_parquet!/2","id":"from_parquet!/2","title":"from_parquet!(filename, opts \\\\ [])"},{"anchor":"load_csv/2","id":"load_csv/2","title":"load_csv(contents, opts \\\\ [])"},{"anchor":"load_csv!/2","id":"load_csv!/2","title":"load_csv!(contents, opts \\\\ [])"},{"anchor":"load_ipc/2","id":"load_ipc/2","title":"load_ipc(contents, opts \\\\ [])"},{"anchor":"load_ipc!/2","id":"load_ipc!/2","title":"load_ipc!(contents, opts \\\\ [])"},{"anchor":"load_ipc_stream/2","id":"load_ipc_stream/2","title":"load_ipc_stream(contents, opts \\\\ [])"},{"anchor":"load_ipc_stream!/2","id":"load_ipc_stream!/2","title":"load_ipc_stream!(contents, opts \\\\ [])"},{"anchor":"load_ndjson/2","id":"load_ndjson/2","title":"load_ndjson(contents, opts \\\\ [])"},{"anchor":"load_ndjson!/2","id":"load_ndjson!/2","title":"load_ndjson!(contents, opts \\\\ [])"},{"anchor":"load_parquet/2","id":"load_parquet/2","title":"load_parquet(contents, opts \\\\ [])"},{"anchor":"load_parquet!/2","id":"load_parquet!/2","title":"load_parquet!(contents, opts \\\\ [])"},{"anchor":"to_csv/3","id":"to_csv/3","title":"to_csv(df, filename, opts \\\\ [])"},{"anchor":"to_csv!/3","id":"to_csv!/3","title":"to_csv!(df, filename, opts \\\\ [])"},{"anchor":"to_ipc/3","id":"to_ipc/3","title":"to_ipc(df, filename, opts \\\\ [])"},{"anchor":"to_ipc!/3","id":"to_ipc!/3","title":"to_ipc!(df, filename, opts \\\\ [])"},{"anchor":"to_ipc_stream/3","id":"to_ipc_stream/3","title":"to_ipc_stream(df, filename, opts \\\\ [])"},{"anchor":"to_ndjson/3","id":"to_ndjson/3","title":"to_ndjson(df, filename, opts \\\\ [])"},{"anchor":"to_ndjson!/3","id":"to_ndjson!/3","title":"to_ndjson!(df, filename, opts \\\\ [])"},{"anchor":"to_parquet/3","id":"to_parquet/3","title":"to_parquet(df, filename, opts \\\\ [])"},{"anchor":"to_parquet!/3","id":"to_parquet!/3","title":"to_parquet!(df, filename, opts \\\\ [])"}]}],"sections":[{"anchor":"module-creating-dataframes","id":"Creating dataframes"},{"anchor":"module-verbs","id":"Verbs"},{"anchor":"module-io-operations","id":"IO operations"},{"anchor":"module-selecting-columns-and-access","id":"Selecting columns and access"}],"title":"Explorer.DataFrame"},{"group":"","id":"Explorer.Datasets","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"fossil_fuels/0","id":"fossil_fuels/0","title":"fossil_fuels()"},{"anchor":"iris/0","id":"iris/0","title":"iris()"},{"anchor":"wine/0","id":"wine/0","title":"wine()"}]}],"sections":[],"title":"Explorer.Datasets"},{"group":"","id":"Explorer.Query","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"**/2","id":"**/2","title":"left ** right"},{"anchor":"*/2","id":"*/2","title":"left * right"},{"anchor":"+/1","id":"+/1","title":"+number"},{"anchor":"+/2","id":"+/2","title":"left + right"},{"anchor":"-/1","id":"-/1","title":"-number"},{"anchor":"-/2","id":"-/2","title":"left - right"},{"anchor":"//2","id":"//2","title":"left / right"},{"anchor":"!=/2","id":"!=/2","title":"left != right"},{"anchor":"%3C/2","id":"</2","title":"left < right"},{"anchor":"%3C=/2","id":"<=/2","title":"left <= right"},{"anchor":"%3C%3E/2","id":"<>/2","title":"left <> right"},{"anchor":"==/2","id":"==/2","title":"left == right"},{"anchor":"%3E/2","id":">/2","title":"left > right"},{"anchor":"%3E=/2","id":">=/2","title":"left >= right"},{"anchor":"across/0","id":"across/0","title":"across()"},{"anchor":"across/1","id":"across/1","title":"across(selector)"},{"anchor":"col/1","id":"col/1","title":"col(name)"},{"anchor":"query/1","id":"query/1","title":"query(expression)"}]}],"sections":[{"anchor":"module-supported-operations","id":"Supported operations"},{"anchor":"module-interpolation","id":"Interpolation"},{"anchor":"module-across-and-comprehensions","id":"Across and comprehensions"},{"anchor":"module-implementation-details","id":"Implementation details"}],"title":"Explorer.Query"},{"group":"","id":"Explorer.Series","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:dtype/0","id":"dtype/0","title":"dtype()"},{"anchor":"t:lazy_t/0","id":"lazy_t/0","title":"lazy_t()"},{"anchor":"t:t/0","id":"t/0","title":"t()"}]},{"key":"functions-conversion","name":"Functions: Conversion","nodes":[{"anchor":"from_binary/3","id":"from_binary/3","title":"from_binary(binary, dtype, opts \\\\ [])"},{"anchor":"from_list/2","id":"from_list/2","title":"from_list(list, opts \\\\ [])"},{"anchor":"from_tensor/2","id":"from_tensor/2","title":"from_tensor(tensor, opts \\\\ [])"},{"anchor":"replace/2","id":"replace/2","title":"replace(series, tensor_or_list)"},{"anchor":"to_binary/1","id":"to_binary/1","title":"to_binary(series)"},{"anchor":"to_enum/1","id":"to_enum/1","title":"to_enum(series)"},{"anchor":"to_iovec/1","id":"to_iovec/1","title":"to_iovec(series)"},{"anchor":"to_list/1","id":"to_list/1","title":"to_list(series)"},{"anchor":"to_tensor/2","id":"to_tensor/2","title":"to_tensor(series, tensor_opts \\\\ [])"}]},{"key":"functions-aggregation","name":"Functions: Aggregation","nodes":[{"anchor":"count/1","id":"count/1","title":"count(series)"},{"anchor":"frequencies/1","id":"frequencies/1","title":"frequencies(series)"},{"anchor":"max/1","id":"max/1","title":"max(series)"},{"anchor":"mean/1","id":"mean/1","title":"mean(series)"},{"anchor":"median/1","id":"median/1","title":"median(series)"},{"anchor":"min/1","id":"min/1","title":"min(series)"},{"anchor":"n_distinct/1","id":"n_distinct/1","title":"n_distinct(series)"},{"anchor":"nil_count/1","id":"nil_count/1","title":"nil_count(series)"},{"anchor":"quantile/2","id":"quantile/2","title":"quantile(series, quantile)"},{"anchor":"standard_deviation/1","id":"standard_deviation/1","title":"standard_deviation(series)"},{"anchor":"sum/1","id":"sum/1","title":"sum(series)"},{"anchor":"variance/1","id":"variance/1","title":"variance(series)"}]},{"key":"functions-element-wise","name":"Functions: Element-wise","nodes":[{"anchor":"add/2","id":"add/2","title":"add(left, right)"},{"anchor":"all_equal/2","id":"all_equal/2","title":"all_equal(left, right)"},{"anchor":"and/2","id":"and/2","title":"left and right"},{"anchor":"cast/2","id":"cast/2","title":"cast(series, dtype)"},{"anchor":"categorise/2","id":"categorise/2","title":"categorise(series, categories)"},{"anchor":"coalesce/1","id":"coalesce/1","title":"coalesce(list)"},{"anchor":"coalesce/2","id":"coalesce/2","title":"coalesce(s1, s2)"},{"anchor":"divide/2","id":"divide/2","title":"divide(left, right)"},{"anchor":"equal/2","id":"equal/2","title":"equal(left, right)"},{"anchor":"greater/2","id":"greater/2","title":"greater(left, right)"},{"anchor":"greater_equal/2","id":"greater_equal/2","title":"greater_equal(left, right)"},{"anchor":"in/2","id":"in/2","title":"left in right"},{"anchor":"is_nil/1","id":"is_nil/1","title":"is_nil(series)"},{"anchor":"is_not_nil/1","id":"is_not_nil/1","title":"is_not_nil(series)"},{"anchor":"less/2","id":"less/2","title":"less(left, right)"},{"anchor":"less_equal/2","id":"less_equal/2","title":"less_equal(left, right)"},{"anchor":"mask/2","id":"mask/2","title":"mask(series, mask)"},{"anchor":"multiply/2","id":"multiply/2","title":"multiply(left, right)"},{"anchor":"not/1","id":"not/1","title":"not series"},{"anchor":"not_equal/2","id":"not_equal/2","title":"not_equal(left, right)"},{"anchor":"or/2","id":"or/2","title":"left or right"},{"anchor":"peaks/2","id":"peaks/2","title":"peaks(series, max_or_min \\\\ :max)"},{"anchor":"pow/2","id":"pow/2","title":"pow(left, right)"},{"anchor":"quotient/2","id":"quotient/2","title":"quotient(left, right)"},{"anchor":"remainder/2","id":"remainder/2","title":"remainder(left, right)"},{"anchor":"select/3","id":"select/3","title":"select(predicate, on_true, on_false)"},{"anchor":"subtract/2","id":"subtract/2","title":"subtract(left, right)"},{"anchor":"transform/2","id":"transform/2","title":"transform(series, fun)"}]},{"key":"functions-datetime-ops","name":"Functions: Datetime ops","nodes":[{"anchor":"day_of_week/1","id":"day_of_week/1","title":"day_of_week(series)"},{"anchor":"to_date/1","id":"to_date/1","title":"to_date(series)"},{"anchor":"to_time/1","id":"to_time/1","title":"to_time(series)"}]},{"key":"functions-float-ops","name":"Functions: Float ops","nodes":[{"anchor":"ceil/1","id":"ceil/1","title":"ceil(series)"},{"anchor":"floor/1","id":"floor/1","title":"floor(series)"},{"anchor":"is_finite/1","id":"is_finite/1","title":"is_finite(series)"},{"anchor":"is_infinite/1","id":"is_infinite/1","title":"is_infinite(series)"},{"anchor":"is_nan/1","id":"is_nan/1","title":"is_nan(series)"},{"anchor":"round/2","id":"round/2","title":"round(series, decimals)"}]},{"key":"functions-string-ops","name":"Functions: String ops","nodes":[{"anchor":"contains/2","id":"contains/2","title":"contains(series, pattern)"},{"anchor":"downcase/1","id":"downcase/1","title":"downcase(series)"},{"anchor":"trim/1","id":"trim/1","title":"trim(series)"},{"anchor":"trim_leading/1","id":"trim_leading/1","title":"trim_leading(series)"},{"anchor":"trim_trailing/1","id":"trim_trailing/1","title":"trim_trailing(series)"},{"anchor":"upcase/1","id":"upcase/1","title":"upcase(series)"}]},{"key":"functions-introspection","name":"Functions: Introspection","nodes":[{"anchor":"categories/1","id":"categories/1","title":"categories(series)"},{"anchor":"dtype/1","id":"dtype/1","title":"dtype(series)"},{"anchor":"iotype/1","id":"iotype/1","title":"iotype(series)"},{"anchor":"size/1","id":"size/1","title":"size(series)"}]},{"key":"functions-shape","name":"Functions: Shape","nodes":[{"anchor":"argsort/2","id":"argsort/2","title":"argsort(series, opts \\\\ [])"},{"anchor":"at/2","id":"at/2","title":"at(series, idx)"},{"anchor":"at_every/2","id":"at_every/2","title":"at_every(series, every_n)"},{"anchor":"concat/1","id":"concat/1","title":"concat(series)"},{"anchor":"concat/2","id":"concat/2","title":"concat(s1, s2)"},{"anchor":"distinct/1","id":"distinct/1","title":"distinct(series)"},{"anchor":"first/1","id":"first/1","title":"first(series)"},{"anchor":"format/1","id":"format/1","title":"format(list)"},{"anchor":"head/2","id":"head/2","title":"head(series, n_elements \\\\ 10)"},{"anchor":"last/1","id":"last/1","title":"last(series)"},{"anchor":"reverse/1","id":"reverse/1","title":"reverse(series)"},{"anchor":"sample/3","id":"sample/3","title":"sample(series, n_or_frac, opts \\\\ [])"},{"anchor":"shift/2","id":"shift/2","title":"shift(series, offset)"},{"anchor":"shuffle/2","id":"shuffle/2","title":"shuffle(series, opts \\\\ [])"},{"anchor":"slice/2","id":"slice/2","title":"slice(series, indices)"},{"anchor":"slice/3","id":"slice/3","title":"slice(series, offset, size)"},{"anchor":"sort/2","id":"sort/2","title":"sort(series, opts \\\\ [])"},{"anchor":"tail/2","id":"tail/2","title":"tail(series, n_elements \\\\ 10)"},{"anchor":"unordered_distinct/1","id":"unordered_distinct/1","title":"unordered_distinct(series)"}]},{"key":"functions-window","name":"Functions: Window","nodes":[{"anchor":"cumulative_max/2","id":"cumulative_max/2","title":"cumulative_max(series, opts \\\\ [])"},{"anchor":"cumulative_min/2","id":"cumulative_min/2","title":"cumulative_min(series, opts \\\\ [])"},{"anchor":"cumulative_sum/2","id":"cumulative_sum/2","title":"cumulative_sum(series, opts \\\\ [])"},{"anchor":"fill_missing/2","id":"fill_missing/2","title":"fill_missing(series, value)"},{"anchor":"window_max/3","id":"window_max/3","title":"window_max(series, window_size, opts \\\\ [])"},{"anchor":"window_mean/3","id":"window_mean/3","title":"window_mean(series, window_size, opts \\\\ [])"},{"anchor":"window_min/3","id":"window_min/3","title":"window_min(series, window_size, opts \\\\ [])"},{"anchor":"window_sum/3","id":"window_sum/3","title":"window_sum(series, window_size, opts \\\\ [])"}]}],"sections":[{"anchor":"module-creating-series","id":"Creating series"}],"title":"Explorer.Series"},{"group":"","id":"Explorer.TensorFrame","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0","title":"t()"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"pull/2","id":"pull/2","title":"pull(tf, name)"},{"anchor":"put/3","id":"put/3","title":"put(tf, name, tensor)"}]}],"sections":[{"anchor":"module-stack-and-concatenating","id":"Stack and concatenating"},{"anchor":"module-warning-returning-tensorframes","id":"Warning: returning TensorFrames"},{"anchor":"module-supported-dtypes","id":"Supported dtypes"}],"title":"Explorer.TensorFrame"},{"group":"Backends","id":"Explorer.Backend","nodeGroups":[{"key":"functions","name":"Functions","nodes":[{"anchor":"get/0","id":"get/0","title":"get()"},{"anchor":"put/1","id":"put/1","title":"put(backend)"}]}],"sections":[],"title":"Explorer.Backend"},{"group":"Backends","id":"Explorer.Backend.DataFrame","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:basic_types/0","id":"basic_types/0","title":"basic_types()"},{"anchor":"t:column_name/0","id":"column_name/0","title":"column_name()"},{"anchor":"t:columns_for_io/0","id":"columns_for_io/0","title":"columns_for_io()"},{"anchor":"t:compression/0","id":"compression/0","title":"compression()"},{"anchor":"t:df/0","id":"df/0","title":"df()"},{"anchor":"t:dtype/0","id":"dtype/0","title":"dtype()"},{"anchor":"t:dtypes/0","id":"dtypes/0","title":"dtypes()"},{"anchor":"t:lazy_frame/0","id":"lazy_frame/0","title":"lazy_frame()"},{"anchor":"t:lazy_series/0","id":"lazy_series/0","title":"lazy_series()"},{"anchor":"t:mutate_value/0","id":"mutate_value/0","title":"mutate_value()"},{"anchor":"t:ok_result/0","id":"ok_result/0","title":"ok_result()"},{"anchor":"t:option/1","id":"option/1","title":"option(type)"},{"anchor":"t:result/1","id":"result/1","title":"result(t)"},{"anchor":"t:series/0","id":"series/0","title":"series()"},{"anchor":"t:t/0","id":"t/0","title":"t()"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:arrange_with/3","id":"arrange_with/3","title":"arrange_with(df, out_df, directions)"},{"anchor":"c:collect/1","id":"collect/1","title":"collect(df)"},{"anchor":"c:concat_columns/2","id":"concat_columns/2","title":"concat_columns(list, out_df)"},{"anchor":"c:concat_rows/2","id":"concat_rows/2","title":"concat_rows(list, out_df)"},{"anchor":"c:describe/3","id":"describe/3","title":"describe(df, out_df, percentiles)"},{"anchor":"c:distinct/3","id":"distinct/3","title":"distinct(df, out_df, columns)"},{"anchor":"c:drop_nil/2","id":"drop_nil/2","title":"drop_nil(df, columns)"},{"anchor":"c:dummies/3","id":"dummies/3","title":"dummies(df, out_df, columns)"},{"anchor":"c:dump_csv/3","id":"dump_csv/3","title":"dump_csv(df, header?, delimiter)"},{"anchor":"c:dump_ipc/2","id":"dump_ipc/2","title":"dump_ipc(df, compression)"},{"anchor":"c:dump_ipc_stream/2","id":"dump_ipc_stream/2","title":"dump_ipc_stream(df, compression)"},{"anchor":"c:dump_ndjson/1","id":"dump_ndjson/1","title":"dump_ndjson(df)"},{"anchor":"c:dump_parquet/2","id":"dump_parquet/2","title":"dump_parquet(df, compression)"},{"anchor":"c:filter_with/3","id":"filter_with/3","title":"filter_with(df, out_df, lazy_series)"},{"anchor":"c:from_csv/11","id":"from_csv/11","title":"from_csv(\n  filename,\n  dtypes,\n  delimiter,\n  null_character,\n  skip_rows,\n  header?,\n  encoding,\n  max_rows,\n  columns,\n  infer_schema_length,\n  parse_dates\n)"},{"anchor":"c:from_ipc/2","id":"from_ipc/2","title":"from_ipc(filename, columns)"},{"anchor":"c:from_ipc_stream/2","id":"from_ipc_stream/2","title":"from_ipc_stream(filename, columns)"},{"anchor":"c:from_ndjson/3","id":"from_ndjson/3","title":"from_ndjson(filename, infer_schema_length, batch_size)"},{"anchor":"c:from_parquet/3","id":"from_parquet/3","title":"from_parquet(filename, max_rows, columns)"},{"anchor":"c:from_series/1","id":"from_series/1","title":"from_series(list)"},{"anchor":"c:from_tabular/2","id":"from_tabular/2","title":"from_tabular(t, dtypes)"},{"anchor":"c:head/2","id":"head/2","title":"head(df, rows)"},{"anchor":"c:inspect/2","id":"inspect/2","title":"inspect(df, opts)"},{"anchor":"c:join/5","id":"join/5","title":"join(left, right, out_df, on, how)"},{"anchor":"c:lazy/0","id":"lazy/0","title":"lazy()"},{"anchor":"c:load_csv/11","id":"load_csv/11","title":"load_csv(\n  contents,\n  dtypes,\n  delimiter,\n  null_character,\n  skip_rows,\n  header?,\n  encoding,\n  max_rows,\n  columns,\n  infer_schema_length,\n  parse_dates\n)"},{"anchor":"c:load_ipc/2","id":"load_ipc/2","title":"load_ipc(contents, columns)"},{"anchor":"c:load_ipc_stream/2","id":"load_ipc_stream/2","title":"load_ipc_stream(contents, columns)"},{"anchor":"c:load_ndjson/3","id":"load_ndjson/3","title":"load_ndjson(contents, infer_schema_length, batch_size)"},{"anchor":"c:load_parquet/1","id":"load_parquet/1","title":"load_parquet(contents)"},{"anchor":"c:mask/2","id":"mask/2","title":"mask(df, mask)"},{"anchor":"c:mutate_with/3","id":"mutate_with/3","title":"mutate_with(df, out_df, mutations)"},{"anchor":"c:n_rows/1","id":"n_rows/1","title":"n_rows(df)"},{"anchor":"c:pivot_longer/6","id":"pivot_longer/6","title":"pivot_longer(df, out_df, columns_to_pivot, columns_to_keep, names_to, values_to)"},{"anchor":"c:pivot_wider/5","id":"pivot_wider/5","title":"pivot_wider(df, id_columns, names_from, values_from, names_prefix)"},{"anchor":"c:pull/2","id":"pull/2","title":"pull(df, column)"},{"anchor":"c:put/4","id":"put/4","title":"put(df, out_df, column_name, series)"},{"anchor":"c:rename/3","id":"rename/3","title":"rename(df, out_df, list)"},{"anchor":"c:sample/5","id":"sample/5","title":"sample(df, n_or_frac, replace, shuffle, seed)"},{"anchor":"c:select/2","id":"select/2","title":"select(df, out_df)"},{"anchor":"c:slice/2","id":"slice/2","title":"slice(df, indices)"},{"anchor":"c:slice/3","id":"slice/3","title":"slice(df, offset, length)"},{"anchor":"c:summarise_with/3","id":"summarise_with/3","title":"summarise_with(df, out_df, aggregations)"},{"anchor":"c:tail/2","id":"tail/2","title":"tail(df, rows)"},{"anchor":"c:to_csv/4","id":"to_csv/4","title":"to_csv(df, filename, header?, delimiter)"},{"anchor":"c:to_ipc/3","id":"to_ipc/3","title":"to_ipc(df, filename, compression)"},{"anchor":"c:to_ipc_stream/3","id":"to_ipc_stream/3","title":"to_ipc_stream(df, filename, compression)"},{"anchor":"c:to_lazy/1","id":"to_lazy/1","title":"to_lazy(df)"},{"anchor":"c:to_ndjson/2","id":"to_ndjson/2","title":"to_ndjson(df, filename)"},{"anchor":"c:to_parquet/3","id":"to_parquet/3","title":"to_parquet(df, filename, compression)"},{"anchor":"c:to_rows/2","id":"to_rows/2","title":"to_rows(df, atom_keys?)"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"inspect/5","id":"inspect/5","title":"inspect(df, backend, n_rows, inspect_opts, opts \\\\ [])"},{"anchor":"new/3","id":"new/3","title":"new(data, names, dtypes)"}]}],"sections":[],"title":"Explorer.Backend.DataFrame"},{"group":"Backends","id":"Explorer.Backend.LazyFrame","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0","title":"t()"}]}],"sections":[],"title":"Explorer.Backend.LazyFrame"},{"group":"Backends","id":"Explorer.Backend.LazySeries","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:t/0","id":"t/0","title":"t()"}]}],"sections":[],"title":"Explorer.Backend.LazySeries"},{"group":"Backends","id":"Explorer.Backend.Series","nodeGroups":[{"key":"types","name":"Types","nodes":[{"anchor":"t:df/0","id":"df/0","title":"df()"},{"anchor":"t:dtype/0","id":"dtype/0","title":"dtype()"},{"anchor":"t:lazy_s/0","id":"lazy_s/0","title":"lazy_s()"},{"anchor":"t:option/1","id":"option/1","title":"option(type)"},{"anchor":"t:s/0","id":"s/0","title":"s()"},{"anchor":"t:t/0","id":"t/0","title":"t()"},{"anchor":"t:valid_types/0","id":"valid_types/0","title":"valid_types()"},{"anchor":"t:window_option/0","id":"window_option/0","title":"window_option()"}]},{"key":"callbacks","name":"Callbacks","nodes":[{"anchor":"c:add/2","id":"add/2","title":"add(arg1, arg2)"},{"anchor":"c:all_equal/2","id":"all_equal/2","title":"all_equal(s, s)"},{"anchor":"c:argsort/3","id":"argsort/3","title":"argsort(s, descending?, nils_last)"},{"anchor":"c:at/2","id":"at/2","title":"at(s, idx)"},{"anchor":"c:at_every/2","id":"at_every/2","title":"at_every(s, integer)"},{"anchor":"c:binary_and/2","id":"binary_and/2","title":"binary_and(s, s)"},{"anchor":"c:binary_in/2","id":"binary_in/2","title":"binary_in(s, s)"},{"anchor":"c:binary_or/2","id":"binary_or/2","title":"binary_or(s, s)"},{"anchor":"c:cast/2","id":"cast/2","title":"cast(s, dtype)"},{"anchor":"c:categories/1","id":"categories/1","title":"categories(s)"},{"anchor":"c:categorise/2","id":"categorise/2","title":"categorise(s, s)"},{"anchor":"c:ceil/1","id":"ceil/1","title":"ceil(s)"},{"anchor":"c:coalesce/2","id":"coalesce/2","title":"coalesce(s, s)"},{"anchor":"c:concat/1","id":"concat/1","title":"concat(list)"},{"anchor":"c:contains/2","id":"contains/2","title":"contains(s, t)"},{"anchor":"c:count/1","id":"count/1","title":"count(s)"},{"anchor":"c:cumulative_max/2","id":"cumulative_max/2","title":"cumulative_max(s, reverse?)"},{"anchor":"c:cumulative_min/2","id":"cumulative_min/2","title":"cumulative_min(s, reverse?)"},{"anchor":"c:cumulative_sum/2","id":"cumulative_sum/2","title":"cumulative_sum(s, reverse?)"},{"anchor":"c:day_of_week/1","id":"day_of_week/1","title":"day_of_week(s)"},{"anchor":"c:distinct/1","id":"distinct/1","title":"distinct(s)"},{"anchor":"c:divide/2","id":"divide/2","title":"divide(arg1, arg2)"},{"anchor":"c:downcase/1","id":"downcase/1","title":"downcase(s)"},{"anchor":"c:dtype/1","id":"dtype/1","title":"dtype(s)"},{"anchor":"c:equal/2","id":"equal/2","title":"equal(arg1, arg2)"},{"anchor":"c:fill_missing_with_strategy/2","id":"fill_missing_with_strategy/2","title":"fill_missing_with_strategy(s, arg2)"},{"anchor":"c:fill_missing_with_value/2","id":"fill_missing_with_value/2","title":"fill_missing_with_value(s, arg2)"},{"anchor":"c:first/1","id":"first/1","title":"first(s)"},{"anchor":"c:floor/1","id":"floor/1","title":"floor(s)"},{"anchor":"c:format/1","id":"format/1","title":"format(list)"},{"anchor":"c:frequencies/1","id":"frequencies/1","title":"frequencies(s)"},{"anchor":"c:from_binary/2","id":"from_binary/2","title":"from_binary(binary, dtype)"},{"anchor":"c:from_list/2","id":"from_list/2","title":"from_list(list, dtype)"},{"anchor":"c:greater/2","id":"greater/2","title":"greater(arg1, arg2)"},{"anchor":"c:greater_equal/2","id":"greater_equal/2","title":"greater_equal(arg1, arg2)"},{"anchor":"c:head/2","id":"head/2","title":"head(s, n)"},{"anchor":"c:inspect/2","id":"inspect/2","title":"inspect(s, opts)"},{"anchor":"c:iotype/1","id":"iotype/1","title":"iotype(s)"},{"anchor":"c:is_finite/1","id":"is_finite/1","title":"is_finite(s)"},{"anchor":"c:is_infinite/1","id":"is_infinite/1","title":"is_infinite(s)"},{"anchor":"c:is_nan/1","id":"is_nan/1","title":"is_nan(s)"},{"anchor":"c:is_nil/1","id":"is_nil/1","title":"is_nil(s)"},{"anchor":"c:is_not_nil/1","id":"is_not_nil/1","title":"is_not_nil(s)"},{"anchor":"c:last/1","id":"last/1","title":"last(s)"},{"anchor":"c:less/2","id":"less/2","title":"less(arg1, arg2)"},{"anchor":"c:less_equal/2","id":"less_equal/2","title":"less_equal(arg1, arg2)"},{"anchor":"c:mask/2","id":"mask/2","title":"mask(s, mask)"},{"anchor":"c:max/1","id":"max/1","title":"max(s)"},{"anchor":"c:mean/1","id":"mean/1","title":"mean(s)"},{"anchor":"c:median/1","id":"median/1","title":"median(s)"},{"anchor":"c:min/1","id":"min/1","title":"min(s)"},{"anchor":"c:multiply/2","id":"multiply/2","title":"multiply(arg1, arg2)"},{"anchor":"c:n_distinct/1","id":"n_distinct/1","title":"n_distinct(s)"},{"anchor":"c:nil_count/1","id":"nil_count/1","title":"nil_count(s)"},{"anchor":"c:not_equal/2","id":"not_equal/2","title":"not_equal(arg1, arg2)"},{"anchor":"c:peaks/2","id":"peaks/2","title":"peaks(s, arg2)"},{"anchor":"c:pow/2","id":"pow/2","title":"pow(arg1, arg2)"},{"anchor":"c:quantile/2","id":"quantile/2","title":"quantile(s, float)"},{"anchor":"c:quotient/2","id":"quotient/2","title":"quotient(arg1, arg2)"},{"anchor":"c:remainder/2","id":"remainder/2","title":"remainder(arg1, arg2)"},{"anchor":"c:reverse/1","id":"reverse/1","title":"reverse(s)"},{"anchor":"c:round/2","id":"round/2","title":"round(s, decimals)"},{"anchor":"c:sample/5","id":"sample/5","title":"sample(s, n_or_frac, replacement, shuffle, seed)"},{"anchor":"c:select/3","id":"select/3","title":"select(predicate, s, s)"},{"anchor":"c:shift/3","id":"shift/3","title":"shift(s, offset, default)"},{"anchor":"c:size/1","id":"size/1","title":"size(s)"},{"anchor":"c:slice/2","id":"slice/2","title":"slice(s, indices)"},{"anchor":"c:slice/3","id":"slice/3","title":"slice(s, offset, length)"},{"anchor":"c:sort/3","id":"sort/3","title":"sort(s, descending?, nils_last)"},{"anchor":"c:standard_deviation/1","id":"standard_deviation/1","title":"standard_deviation(s)"},{"anchor":"c:subtract/2","id":"subtract/2","title":"subtract(arg1, arg2)"},{"anchor":"c:sum/1","id":"sum/1","title":"sum(s)"},{"anchor":"c:tail/2","id":"tail/2","title":"tail(s, n)"},{"anchor":"c:to_date/1","id":"to_date/1","title":"to_date(s)"},{"anchor":"c:to_iovec/1","id":"to_iovec/1","title":"to_iovec(s)"},{"anchor":"c:to_list/1","id":"to_list/1","title":"to_list(s)"},{"anchor":"c:to_time/1","id":"to_time/1","title":"to_time(s)"},{"anchor":"c:transform/2","id":"transform/2","title":"transform(s, function)"},{"anchor":"c:trim/1","id":"trim/1","title":"trim(s)"},{"anchor":"c:trim_leading/1","id":"trim_leading/1","title":"trim_leading(s)"},{"anchor":"c:trim_trailing/1","id":"trim_trailing/1","title":"trim_trailing(s)"},{"anchor":"c:unary_not/1","id":"unary_not/1","title":"unary_not(s)"},{"anchor":"c:unordered_distinct/1","id":"unordered_distinct/1","title":"unordered_distinct(s)"},{"anchor":"c:upcase/1","id":"upcase/1","title":"upcase(s)"},{"anchor":"c:variance/1","id":"variance/1","title":"variance(s)"},{"anchor":"c:window_max/3","id":"window_max/3","title":"window_max(s, window_size, list)"},{"anchor":"c:window_mean/3","id":"window_mean/3","title":"window_mean(s, window_size, list)"},{"anchor":"c:window_min/3","id":"window_min/3","title":"window_min(s, window_size, list)"},{"anchor":"c:window_sum/3","id":"window_sum/3","title":"window_sum(s, window_size, list)"}]},{"key":"functions","name":"Functions","nodes":[{"anchor":"inspect/5","id":"inspect/5","title":"inspect(series, backend, n_rows, inspect_opts, opts \\\\ [])"},{"anchor":"new/2","id":"new/2","title":"new(data, dtype)"}]}],"sections":[],"title":"Explorer.Backend.Series"},{"group":"Backends","id":"Explorer.PolarsBackend","sections":[],"title":"Explorer.PolarsBackend"}],"tasks":[]}