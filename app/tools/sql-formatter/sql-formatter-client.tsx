"use client";

import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { TextTransformTool } from "@/components/tool/text-transform-tool";

// Dialects supported by the `sql-formatter` library that map to common databases.
type Dialect = "sql" | "postgresql" | "mysql" | "sqlite" | "tsql" | "bigquery";
type KeywordCase = "upper" | "lower" | "preserve";

const DIALECT_LABELS: Record<Dialect, string> = {
  sql: "Standard SQL",
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  sqlite: "SQLite",
  tsql: "SQL Server (T-SQL)",
  bigquery: "BigQuery",
};

const KEYWORD_LABELS: Record<KeywordCase, string> = {
  upper: "UPPERCASE",
  lower: "lowercase",
  preserve: "Preserve",
};

const SAMPLE = `select u.id, u.name, count(o.id) as orders from users u left join orders o on o.user_id = u.id where u.active = 1 and o.created_at > '2024-01-01' group by u.id, u.name having count(o.id) > 3 order by orders desc limit 10;`;

export function SqlFormatterClient() {
  const [dialect, setDialect] = useState<Dialect>("sql");
  const [keywordCase, setKeywordCase] = useState<KeywordCase>("upper");

  const transform = async (sql: string) => {
    const { format } = await import("sql-formatter");
    return format(sql, {
      language: dialect,
      keywordCase,
      tabWidth: 2,
    });
  };

  return (
    <TextTransformTool
      transform={transform}
      watch={[dialect, keywordCase]}
      inputLabel="SQL"
      outputLabel="Formatted SQL"
      inputPlaceholder="Paste a messy SQL query here…"
      emptyOutput="Your formatted SQL will appear here."
      initialInput={SAMPLE}
      download={{ filename: "formatted.sql", mime: "text/plain" }}
      acceptFile=".sql,.txt"
      controls={
        <div className="flex flex-wrap items-end gap-4">
          <div className="flex flex-col gap-1">
            <Label htmlFor="sql-dialect">Dialect</Label>
            <Select
              id="sql-dialect"
              value={dialect}
              onChange={(e) => setDialect(e.target.value as Dialect)}
              className="w-52"
            >
              {(Object.keys(DIALECT_LABELS) as Dialect[]).map((d) => (
                <option key={d} value={d}>
                  {DIALECT_LABELS[d]}
                </option>
              ))}
            </Select>
          </div>
          <div className="flex flex-col gap-1">
            <Label htmlFor="sql-keyword-case">Keyword case</Label>
            <Select
              id="sql-keyword-case"
              value={keywordCase}
              onChange={(e) => setKeywordCase(e.target.value as KeywordCase)}
              className="w-44"
            >
              {(Object.keys(KEYWORD_LABELS) as KeywordCase[]).map((k) => (
                <option key={k} value={k}>
                  {KEYWORD_LABELS[k]}
                </option>
              ))}
            </Select>
          </div>
        </div>
      }
    />
  );
}
